import feedparser
from datetime import datetime
from dateutil import parser as date_parser
from django.utils.text import slugify
from .models import Source, Article

def parse_feed(source: Source) -> None:
    """
    Parse RSS feed for a given source and create/update articles.
    """
    feed = feedparser.parse(source.feed_url)
    
    for entry in feed.entries:
        # Skip if no title or link
        if not entry.title or not entry.link:
            continue
            
        # Parse published date
        if hasattr(entry, 'published'):
            published_at = date_parser.parse(entry.published)
        else:
            published_at = datetime.now()
            
        # Get or create article
        article, created = Article.objects.get_or_create(
            url=entry.link,
            defaults={
                'title': entry.title,
                'source': source,
                'content': entry.get('description', ''),
                'published_at': published_at,
                'slug': slugify(entry.title)
            }
        )
        
        if not created:
            # Update existing article
            article.title = entry.title
            article.content = entry.get('description', '')
            article.published_at = published_at
            article.save()

def update_all_feeds() -> None:
    """
    Update articles from all active sources.
    """
    sources = Source.objects.filter(is_active=True)
    for source in sources:
        try:
            parse_feed(source)
        except Exception as e:
            print(f"Error updating feed for {source.name}: {str(e)}") 
from django.core.management.base import BaseCommand
from news.services import update_all_feeds

class Command(BaseCommand):
    help = 'Update articles from all active RSS feeds'

    def handle(self, *args, **options):
        self.stdout.write('Starting feed update...')
        update_all_feeds()
        self.stdout.write(self.style.SUCCESS('Successfully updated feeds')) 
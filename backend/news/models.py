from django.db import models
from django.utils.text import slugify

class Source(models.Model):
    """
    News source model for storing information about different cybersecurity news sources.
    """
    name = models.CharField(max_length=200)
    url = models.URLField()
    feed_url = models.URLField()
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

class Article(models.Model):
    """
    Article model for storing cybersecurity news articles.
    """
    SEVERITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('critical', 'Critical'),
    ]

    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=350, unique=True, blank=True)
    source = models.ForeignKey(Source, on_delete=models.CASCADE, related_name='articles')
    url = models.URLField()
    content = models.TextField()
    summary = models.TextField(blank=True)
    published_at = models.DateTimeField()
    severity = models.CharField(max_length=10, choices=SEVERITY_CHOICES, default='medium')
    tags = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-published_at']
        indexes = [
            models.Index(fields=['-published_at']),
            models.Index(fields=['severity']),
        ]

from django.contrib import admin
from .models import Source, Article

@admin.register(Source)
class SourceAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'is_active', 'created_at', 'updated_at')
    list_filter = ('is_active',)
    search_fields = ('name', 'description')
    ordering = ('name',)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', 'severity', 'published_at', 'created_at')
    list_filter = ('source', 'severity', 'published_at')
    search_fields = ('title', 'content', 'summary')
    ordering = ('-published_at',)
    readonly_fields = ('slug',)

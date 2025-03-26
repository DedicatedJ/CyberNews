from django.shortcuts import render
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Source, Article
from .serializers import SourceSerializer, ArticleSerializer

# Create your views here.

class SourceViewSet(viewsets.ModelViewSet):
    """
    API endpoint for viewing and editing news sources.
    """
    queryset = Source.objects.all()
    serializer_class = SourceSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['name', 'description']
    filterset_fields = ['is_active']

class ArticleViewSet(viewsets.ModelViewSet):
    """
    API endpoint for viewing and editing news articles.
    """
    queryset = Article.objects.select_related('source').all()
    serializer_class = ArticleSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['title', 'content', 'summary', 'tags']
    filterset_fields = {
        'source': ['exact'],
        'severity': ['exact', 'in'],
        'published_at': ['gte', 'lte'],
    }

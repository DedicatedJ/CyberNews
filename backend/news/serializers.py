from rest_framework import serializers
from .models import Source, Article

class SourceSerializer(serializers.ModelSerializer):
    """
    Serializer for the Source model.
    """
    class Meta:
        model = Source
        fields = ['id', 'name', 'url', 'feed_url', 'description', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

class ArticleSerializer(serializers.ModelSerializer):
    """
    Serializer for the Article model.
    """
    source_name = serializers.CharField(source='source.name', read_only=True)
    
    class Meta:
        model = Article
        fields = [
            'id', 'title', 'slug', 'source', 'source_name', 'url', 'content',
            'summary', 'published_at', 'severity', 'tags', 'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at'] 
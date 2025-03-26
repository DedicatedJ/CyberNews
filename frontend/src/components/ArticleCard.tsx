import React from 'react';
import { Link } from 'react-router-dom';

export interface Article {
  id: number;
  title: string;
  url: string;
  source_name: string;
  summary: string;
  published_at: string;
  severity: string;
  tags: string[];
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{article.source_name}</span>
          <span className="text-sm text-gray-500">{formatDate(article.published_at)}</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">
          <Link to={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-700 mb-4">{article.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
              article.severity === 'high' ? 'bg-red-500' :
              article.severity === 'medium' ? 'bg-yellow-500' :
              'bg-green-500'
            }`}></span>
            <span className="text-sm text-gray-600 capitalize">{article.severity}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 
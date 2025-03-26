import React, { useEffect, useState } from 'react';
import SourceList from '../components/SourceList';

interface Source {
  id: number;
  name: string;
  url: string;
  description: string;
  is_active: boolean;
}

const Sources: React.FC = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sources/');
        if (!response.ok) {
          throw new Error('Failed to fetch sources');
        }
        const data = await response.json();
        setSources(data);
      } catch (err) {
        setError('Failed to load sources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSources();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-red-100 text-red-800 p-4 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">News Sources</h1>
      <SourceList sources={sources} />
    </div>
  );
};

export default Sources; 
import React from 'react';

interface Source {
  id: number;
  name: string;
  url: string;
  description: string;
  is_active: boolean;
}

interface SourceListProps {
  sources: Source[];
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sources.map((source) => (
        <div key={source.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                {source.name}
              </a>
            </h3>
            <span className={`px-2 py-1 rounded text-sm ${source.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {source.is_active ? 'Active' : 'Inactive'}
            </span>
          </div>
          <p className="text-gray-600">{source.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SourceList; 
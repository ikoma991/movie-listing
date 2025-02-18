'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBarContent />
    </Suspense>
  );
};

const SearchBarContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearch = () => {
    if (!query.trim()) {
      router.push('/');
      return;
    }
    
    router.push(`/search?query=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for movies..."
          className="w-full px-6 py-3 bg-[#1a1b1f] border border-gray-700 rounded-full text-gray-200 
                   placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                   transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 p-2 text-gray-400 hover:text-white bg-transparent rounded-full
                   hover:bg-blue-500/20 transition-all duration-300"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

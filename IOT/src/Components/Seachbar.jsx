import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [showContainers, setShowContainers] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    setShowContainers(searchValue.trim() !== '');
  }, [searchValue]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowContainers(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => {
    if (searchValue.trim() !== '') {
      setShowContainers(true);
    }
  };

  return (
    <div className="w-full max-w-4xl p-4 mx-auto">
      <div ref={searchRef} className="relative w-full lg:w-2/3 mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500"/>
          </div>
          <input 
            type="text" 
            value={searchValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
        </div>
        
       

       {/* THIS THIS EMPTY CONTAINER ISMEIN END MEIN KAAM HOGA */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow-lg z-10 transition-all duration-200 ${showContainers ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="p-4">
            <p className="text-sm text-gray-600">Searching for: "{searchValue}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
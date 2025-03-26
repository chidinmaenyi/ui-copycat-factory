
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TopNavBar = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Open in app</span>
          <ArrowUpRight className="w-4 h-4 text-gray-600" />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-600 font-medium text-sm">
            Sign up
          </button>
          <button className="text-gray-600 font-medium text-sm">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

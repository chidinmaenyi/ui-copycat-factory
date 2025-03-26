
import React from 'react';
import { Search, PlusCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full bg-background/95 backdrop-blur-sm sticky top-0 z-50 header-shadow animate-fade-in",
      className
    )}>
      <div className="flex items-center justify-between h-16 px-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
          <h1 className="text-xl font-semibold">Home</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="icon-button" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="icon-button" aria-label="Add new">
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

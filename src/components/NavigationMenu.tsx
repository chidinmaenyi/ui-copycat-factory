
import React from 'react';
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  className?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => {
  return (
    <nav className={cn("w-full border-b border-gray-200", className)}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex overflow-x-auto">
          <div className="flex-1 min-w-0">
            <div className="flex">
              <button className="px-6 py-4 font-medium text-lg relative">
                Trending
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
              </button>
              <button className="px-6 py-4 font-medium text-lg text-gray-400">
                What you may like
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;

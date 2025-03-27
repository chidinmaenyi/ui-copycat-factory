
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  className?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <nav className={cn("w-full border-b border-gray-200", className)}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex overflow-x-auto">
          <div className="flex-1 min-w-0">
            <div className="flex">
              <button 
                className={`px-6 py-4 font-medium text-lg relative ${activeTab === "trending" ? "" : "text-gray-400"}`}
                onClick={() => setActiveTab("trending")}
              >
                Trending
                {activeTab === "trending" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
              </button>
              <button 
                className={`px-6 py-4 font-medium text-lg relative ${activeTab === "recommended" ? "" : "text-gray-400"}`}
                onClick={() => setActiveTab("recommended")}
              >
                What you may like
                {activeTab === "recommended" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;

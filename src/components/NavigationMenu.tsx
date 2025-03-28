
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { TrendingUp, Sparkles } from "lucide-react";

interface NavigationMenuProps {
  className?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState("trending");
  const isMobile = useIsMobile();

  return (
    <nav className={cn("w-full border-b border-gray-200", className)}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between overflow-x-auto">
          <div className="flex-1 min-w-0">
            <button 
              className={`px-3 py-3 font-medium flex items-center gap-1.5 relative ${activeTab === "trending" ? "" : "text-gray-400"}`}
              onClick={() => setActiveTab("trending")}
            >
              <TrendingUp size={16} />
              <span className="text-[14px]">What's Trending</span>
              {activeTab === "trending" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
            </button>
          </div>
          <div>
            <button 
              className={`px-3 py-3 font-medium flex items-center gap-1.5 relative ${activeTab === "recommended" ? "" : "text-gray-400"}`}
              onClick={() => setActiveTab("recommended")}
            >
              <Sparkles size={16} />
              <span className="text-[14px]">What you may like</span>
              {activeTab === "recommended" && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;

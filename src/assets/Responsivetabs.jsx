import React, { useState } from "react";

function ResponsiveTabs({ t1, t2, t3, onTabChange }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    onTabChange(tabIndex); // Notify parent about tab change
  };

  return (
    <div className="w-full mb-4 p-1">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-300">
        {[t1, t2, t3].map((tab, index) => (
          <button
            key={index}
            className={`tab text-xs ${
              activeTab === index + 1 ? "border-b-2 border-[rgb(139,69,19)]" : ""
            }`}
            style={{
              color: activeTab === index + 1 ? "rgb(139,69,19)" : "rgb(120,120,120)",
              flex: 1,
              textAlign: "center",
            }}
            onClick={() => handleTabClick(index + 1)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveTabs;

import React, { useState } from "react";

function ResponsiveTabs() {
  const [activeTab, setActiveTab] = useState(1); // State to manage active tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="w-full p-4">
      {/* Tabs */}
      <div className="flex items-center justify-around">
        <button
          className={`tab px-4 py-2 sm:py-3 text-xs ${
            activeTab === 1
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          } ml-0 sm:ml-4`}
          style={{
            color: activeTab === 1 ? "rgb(139,69,19)" : "rgb(120,120,120)",
          }} // Inline style for text color
          onClick={() => handleTabClick(1)}
        >
          DAILY WEAR
        </button>
        <button
          className={`tab px-4 py-2 sm:py-3 text-xs ${
            activeTab === 2
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          } mx-2 sm:mx-4`}
          style={{
            color: activeTab === 2 ? "rgb(139,69,19)" : "rgb(120,120,120)",
          }} // Inline style for text color
          onClick={() => handleTabClick(2)}
        >
          FORMAL WEAR
        </button>
        <button
          className={`tab px-4 py-2 sm:py-3 text-xs ${
            activeTab === 3
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          } mx-2 sm:mx-4`}
          style={{
            color: activeTab === 3 ? "rgb(139,69,19)" : "rgb(120,120,120)",
          }} // Inline style for text color
          onClick={() => handleTabClick(3)}
        >
          PARTY WEAR
        </button>
      </div>

      {/* Tab Panels */}
      <div className="tab-content p-4 sm:p-6">
        {activeTab === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Daily Wear Content</h2>
            <p className="text-sm text-gray-700">
              This is the content for Daily Wear. Customize it as needed!
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Formal Wear Content</h2>
            <p className="text-sm text-gray-700">
              This is the content for Formal Wear. Customize it as needed!
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Party Wear Content</h2>
            <p className="text-sm text-gray-700">
              This is the content for Party Wear. Customize it as needed!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResponsiveTabs;

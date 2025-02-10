import React, { useState } from "react";

function ResponsiveTabs(props) {
  const [activeTab, setActiveTab] = useState(1); // State to manage active tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="w-full mb-4 p-1">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-300">
        <button
          className={`tab text-xs ${
            activeTab === 1
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          }`}
          style={{
            color: activeTab === 1 ? "rgb(139,69,19)" : "rgb(120,120,120)",
            flex: 1,
            textAlign: "center",
          }} // Inline style for text color and alignment
          onClick={() => handleTabClick(1)}
        >
          {props.t1}
        </button>
        <button
          className={`tab text-xs ${
            activeTab === 2
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          }`}
          style={{
            color: activeTab === 2 ? "rgb(139,69,19)" : "rgb(120,120,120)",
            flex: 1,
            textAlign: "center",
          }} // Inline style for text color and alignment
          onClick={() => handleTabClick(2)}
        >
          {props.t2}
        </button>
        <button
          className={`tab text-xs ${
            activeTab === 3
              ? "border-b-2 border-[rgb(139,69,19)]"
              : ""
          }`}
          style={{
            color: activeTab === 3 ? "rgb(139,69,19)" : "rgb(120,120,120)",
            flex: 1,
            textAlign: "center",
          }} // Inline style for text color and alignment
          onClick={() => handleTabClick(3)}
        >
          {props.t3}
        </button>
      </div>

      {/* Tab Panels */}
      <div className="tab-content p-2">
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

import React, { useState } from "react";

export default function GeneratedApp({ requirements }) {
  const {
    appName = "Untitled App",
    entities = [],
    roles = [],
    features = [],
    layout = {}
  } = requirements || {};

  const [activeRole, setActiveRole] = useState(roles.length > 0 ? roles[0] : null);

  const getThemeClasses = () => {
    const theme = layout.theme || "modern";
    const bg = layout.backgroundColor || "white";
    
    const backgrounds = {
      "white": "bg-white",
      "gray-50": "bg-gray-50",
      "blue-50": "bg-blue-50",
      "green-50": "bg-green-50",
      "purple-50": "bg-purple-50",
      "slate-50": "bg-slate-50"
    };
    
    return `min-h-screen ${backgrounds[bg] || "bg-white"}`;
  };

  const getSpacing = () => {
    const spacing = layout.componentSpacing || "normal";
    const spacings = {
      "tight": "gap-2",
      "normal": "gap-4",
      "relaxed": "gap-6",
      "loose": "gap-8"
    };
    return spacings[spacing] || "gap-4";
  };

  const getPrimaryColor = () => {
    const color = layout.primaryColor || "blue";
    return color;
  };

  const getSecondaryColor = () => {
    const color = layout.secondaryColor || "gray";
    return color;
  };

  const getCardStyle = () => {
    const style = layout.cardStyle || "shadow";
    const styles = {
      "flat": "bg-white border",
      "shadow": "bg-white shadow-lg",
      "border": "bg-white border-2",
      "gradient": `bg-gradient-to-br from-${getPrimaryColor()}-50 to-${getSecondaryColor()}-50 shadow`,
      "glass": "bg-white bg-opacity-80 backdrop-blur-sm border border-white border-opacity-30 shadow-xl"
    };
    return styles[style] || "bg-white shadow-lg";
  };

  const getButtonStyle = (isPrimary = false) => {
    const style = layout.buttonStyle || "rounded";
    const primary = getPrimaryColor();
    const secondary = getSecondaryColor();
    
    const baseStyles = {
      "rounded": "rounded-lg",
      "square": "rounded-none",
      "pill": "rounded-full",
      "outline": "rounded-lg border-2",
      "solid": "rounded-lg"
    };
    
    const colorStyle = isPrimary 
      ? `bg-${primary}-600 text-white hover:bg-${primary}-700`
      : `bg-${secondary}-100 text-${secondary}-700 hover:bg-${secondary}-200`;
    
    return `${baseStyles[style]} ${colorStyle} transition-all duration-200`;
  };

  const getLayoutStyle = () => {
    const style = layout.layoutStyle || "grid";
    const styles = {
      "grid": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      "flex": "flex flex-wrap justify-center",
      "masonry": "columns-1 md:columns-2 lg:columns-3",
      "cards": "grid grid-cols-1 md:grid-cols-2",
      "list": "flex flex-col"
    };
    return styles[style] || "grid grid-cols-1 md:grid-cols-2";
  };

  return (
    <div className={getThemeClasses()}>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center text-${getPrimaryColor()}-800`}>
          {appName}
        </h1>

        {roles.length > 0 && (
          <div className={`flex flex-wrap justify-center ${getSpacing()} mb-8`}>
            {roles.map((role, idx) => {
              const roleName = typeof role === "string" ? role : role.name;
              const isActive = activeRole === roleName;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveRole(roleName)}
                  className={`px-6 py-3 ${getButtonStyle()} shadow-md
                    ${isActive 
                      ? `bg-${getPrimaryColor()}-600 text-white` 
                      : `bg-${getSecondaryColor()}-100 text-${getSecondaryColor()}-700 hover:bg-${getSecondaryColor()}-200`
                    }`}
                >
                  {roleName}
                </button>
              );
            })}
          </div>
        )}

        {features.length > 0 && (
          <div className={`${getLayoutStyle()} ${getSpacing()} mb-8`}>
            {features.map((feature, idx) => {
              const featureText = typeof feature === "string" ? feature : feature.name;

              return (
                <button
                  key={idx}
                  className={`p-6 ${getCardStyle()} hover:shadow-xl text-center transform hover:scale-105 transition-all duration-200`}
                >
                  <div className={`text-lg font-semibold text-${getPrimaryColor()}-700 mb-2`}>
                    {featureText}
                  </div>
                  <div className={`text-${getSecondaryColor()}-600 text-sm`}>
                    Click to access
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {entities.length > 0 && (
          <div className={`${getLayoutStyle()} ${getSpacing()}`}>
            {entities.map((entity, idx) => {
              const entityName = typeof entity === "string" ? entity : entity.name;
              const entityDesc = typeof entity === "object" ? entity.description : null;

              return (
                <div key={idx} className={`p-6 ${getCardStyle()} transform hover:scale-105 transition-all duration-200`}>
                  <h2 className={`text-xl font-semibold mb-4 text-${getPrimaryColor()}-800`}>
                    {entityName} Form
                  </h2>
                  {entityDesc && (
                    <p className={`text-${getSecondaryColor()}-600 mb-4`}>{entityDesc}</p>
                  )}
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder={`${entityName} Name`}
                      className={`w-full p-3 border-2 border-${getSecondaryColor()}-200 rounded-lg focus:border-${getPrimaryColor()}-500 focus:outline-none transition-colors`}
                    />
                    <input
                      type="text"
                      placeholder={`${entityName} ID`}
                      className={`w-full p-3 border-2 border-${getSecondaryColor()}-200 rounded-lg focus:border-${getPrimaryColor()}-500 focus:outline-none transition-colors`}
                    />
                    <button className={`w-full py-3 ${getButtonStyle(true)} font-semibold shadow-md hover:shadow-lg`}>
                      Save {entityName}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

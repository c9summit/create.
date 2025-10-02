import React, { useState } from "react";

export default function GeneratedApp({ requirements }) {
  const {
    appName = "Untitled App",
    entities = [],
    roles = [],
    features = []
  } = requirements || {};

  const [activeRole, setActiveRole] = useState(roles.length > 0 ? roles[0] : null);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{appName}</h1>

{roles.length > 0 && (
  <div className="flex space-x-4 mb-6 justify-center">
    {roles.map((role, idx) => {
      const roleName = typeof role === "string" ? role : role.name;

      return (
        <button
          key={idx}
          onClick={() => setActiveRole(roleName)}
          className={`px-4 py-2 rounded-lg shadow 
            ${activeRole === roleName ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}
            hover:bg-blue-500 hover:text-white transition`}
        >
          {roleName}
        </button>
      );
    })}
  </div>
)}


{features.length > 0 && (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    {features.map((feature, idx) => {
      const featureText = typeof feature === "string" ? feature : feature.name;

      return (
        <button
          key={idx}
          className="p-4 bg-white rounded-xl shadow hover:shadow-lg border text-center"
        >
          {featureText}
        </button>
      );
    })}
  </div>
)}


{entities.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {entities.map((entity, idx) => {
      const entityName = typeof entity === "string" ? entity : entity.name;
      const entityDesc = typeof entity === "object" ? entity.description : null;

      return (
        <div key={idx} className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">{entityName} Form</h2>
          {entityDesc && <p className="text-gray-500 mb-4">{entityDesc}</p>}
          <input
            type="text"
            placeholder={`${entityName} Name`}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="text"
            placeholder={`${entityName} ID`}
            className="w-full p-2 border rounded mb-3"
          />
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Save {entityName}
          </button>
        </div>
      );
    })}
  </div>
)}
    </div>
  );
}

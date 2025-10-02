import React from 'react';

export default function GeneratedUI({ requirements }) {
  if (!requirements) return null;

  const getKey = (item, index) => {
    if (typeof item === 'string') return item;
    if (typeof item === 'object' && item.name) return item.name;
    return `item-${index}`;
  };

  const renderEntity = (entity, index) => {
    if (typeof entity === 'string') {
      return (
        <div key={entity} className="mt-4 p-3 border rounded bg-blue-50">
          <h3 className="font-semibold text-blue-800">{entity}</h3>
          <div className="mt-2 space-y-2">
            <input placeholder={`${entity} Field 1`} className="block w-full p-2 border rounded" />
            <input placeholder={`${entity} Field 2`} className="block w-full p-2 border rounded" />
          </div>
        </div>
      );
    }

    return (
      <div key={getKey(entity, index)} className="mt-4 p-4 border rounded bg-blue-50">
        <h3 className="font-semibold text-blue-800 text-lg">{entity.name || 'Entity'}</h3>
        {entity.description && (
          <p className="text-gray-600 mt-1">{entity.description}</p>
        )}
        
        {entity.attributes && entity.attributes.length > 0 && (
          <div className="mt-3">
            <h4 className="font-medium text-blue-700">Attributes:</h4>
            <div className="mt-2 space-y-2">
              {entity.attributes.map((attr, attrIndex) => (
                <div key={attrIndex} className="flex gap-2">
                  <input 
                    placeholder={`${attr.name || `Field ${attrIndex + 1}`} (${attr.type || 'text'})`}
                    className="flex-1 p-2 border rounded text-sm"
                  />
                  {attr.type && (
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs self-center">
                      {attr.type}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderRole = (role, index) => {
    if (typeof role === 'string') {
      return (
        <div key={role} className="p-3 border rounded bg-green-50">
          <span className="font-medium text-green-800">{role}</span>
        </div>
      );
    }

    return (
      <div key={getKey(role, index)} className="p-3 border rounded bg-green-50">
        <h4 className="font-medium text-green-800">{role.name || 'Role'}</h4>
        {role.description && (
          <p className="text-sm text-gray-600 mt-1">{role.description}</p>
        )}
        {role.permissions && role.permissions.length > 0 && (
          <div className="mt-2">
            <span className="text-xs font-medium text-green-700">Permissions:</span>
            <ul className="text-xs text-gray-600 ml-4 list-disc">
              {role.permissions.map((permission, permIndex) => (
                <li key={permIndex}>{permission}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderFeature = (feature, index) => {
    if (typeof feature === 'string') {
      return (
        <li key={feature} className="py-1">
          <span className="font-medium">{feature}</span>
        </li>
      );
    }

    return (
      <li key={getKey(feature, index)} className="py-2 border-b last:border-b-0">
        <div className="font-medium text-purple-800">{feature.name || 'Feature'}</div>
        {feature.description && (
          <div className="text-sm text-gray-600 mt-1">{feature.description}</div>
        )}
      </li>
    );
  };

  return (
    <div className="mt-4 p-4 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{requirements.appName}</h2>
      
      {requirements.roles && requirements.roles.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">👥 User Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {requirements.roles.map((role, index) => renderRole(role, index))}
          </div>
        </div>
      )}

      {requirements.entities && requirements.entities.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">🗂️ Data Entities</h3>
          <div className="space-y-3">
            {requirements.entities.map((entity, index) => renderEntity(entity, index))}
          </div>
        </div>
      )}

      {requirements.features && requirements.features.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">⚡ Features</h3>
          <div className="bg-purple-50 p-4 rounded">
            <ul className="space-y-1">
              {requirements.features.map((feature, index) => renderFeature(feature, index))}
            </ul>
          </div>
        </div>
      )}

      <details className="mt-6 p-3 bg-gray-50 rounded">
        <summary className="cursor-pointer font-medium text-gray-700">🔍 Raw Response Data</summary>
        <pre className="mt-2 text-xs bg-white p-3 rounded border overflow-auto">
          {JSON.stringify(requirements, null, 2)}
        </pre>
      </details>
    </div>
  );
}
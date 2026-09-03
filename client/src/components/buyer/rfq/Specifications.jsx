import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const Specifications = ({ data, updateData }) => {
  const [newField, setNewField] = useState({ key: '', value: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  const addCustomField = () => {
    if (newField.key && newField.value) {
      updateData({
        customFields: [...data.customFields, { ...newField, id: Date.now() }]
      });
      setNewField({ key: '', value: '' });
    }
  };

  const removeCustomField = (id) => {
    updateData({
      customFields: data.customFields.filter(field => field.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Specifications</h2>
      <p className="text-gray-600">Add detailed product specifications</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material
          </label>
          <input
            type="text"
            name="material"
            value={data.material}
            onChange={handleChange}
            placeholder="e.g., 100% Cotton"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size/Dimensions
          </label>
          <input
            type="text"
            name="size"
            value={data.size}
            onChange={handleChange}
            placeholder="e.g., M, L, XL or 10x20cm"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <input
            type="text"
            name="color"
            value={data.color}
            onChange={handleChange}
            placeholder="e.g., White, Black, Custom"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Custom Fields */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Specifications
        </label>
        
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Specification name"
            value={newField.key}
            onChange={(e) => setNewField({ ...newField, key: e.target.value })}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Value"
            value={newField.value}
            onChange={(e) => setNewField({ ...newField, value: e.target.value })}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addCustomField}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        <div className="space-y-2">
          {data.customFields.map((field) => (
            <div key={field.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">{field.key}:</span>
                <span className="ml-2 text-gray-600">{field.value}</span>
              </div>
              <button
                onClick={() => removeCustomField(field.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
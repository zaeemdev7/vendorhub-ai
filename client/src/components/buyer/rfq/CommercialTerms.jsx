import React from 'react';

const CommercialTerms = ({ data, updateData }) => {
  const paymentTerms = [
    '30 days net',
    '60 days net',
    'Letter of Credit',
    'Cash in Advance',
    'T/T',
    'D/P'
  ];

  const shippingMethods = [
    'Sea Freight',
    'Air Freight',
    'Road Transport',
    'Rail Transport',
    'Courier'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Commercial Terms</h2>
      <p className="text-gray-600">Set your budget and commercial requirements</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Budget ($)
          </label>
          <input
            type="number"
            name="budgetMin"
            value={data.budgetMin}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Budget ($)
          </label>
          <input
            type="number"
            name="budgetMax"
            value={data.budgetMax}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Required Delivery Date
          </label>
          <input
            type="date"
            name="deliveryDate"
            value={data.deliveryDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Terms
          </label>
          <select
            name="paymentTerms"
            value={data.paymentTerms}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {paymentTerms.map((term) => (
              <option key={term} value={term}>{term}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Shipping Method
          </label>
          <select
            name="shippingMethod"
            value={data.shippingMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {shippingMethods.map((method) => (
              <option key={method} value={method.toLowerCase().replace(' ', '_')}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CommercialTerms;
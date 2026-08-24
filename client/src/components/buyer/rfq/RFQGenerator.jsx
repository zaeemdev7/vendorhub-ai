import React, { useState } from 'react';
import { Send, FileText, Plus, X } from 'lucide-react';

const RFQGenerator = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    material: '',
    budget: '',
    deliveryDate: '',
    paymentTerms: '',
    shippingMethod: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle RFQ submission
    console.log('RFQ Submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#1F2937]">Generate RFQ</h1>
              <p className="text-gray-600 mt-1">Create a professional Request for Quotation</p>
            </div>
            <button className="bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-[#1E40AF] transition-colors flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Save Draft
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  placeholder="Enter quantity"
                  required
                />
              </div>

              {/* Material */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Material
                </label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  placeholder="Enter material"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  placeholder="Enter budget range"
                />
              </div>

              {/* Delivery Date */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Delivery Date *
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Payment Terms */}
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Payment Terms
                </label>
                <select
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select payment terms</option>
                  <option value="net30">Net 30</option>
                  <option value="net60">Net 60</option>
                  <option value="advance">Advance Payment</option>
                  <option value="lc">Letter of Credit</option>
                </select>
              </div>

              {/* Shipping Method */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Shipping Method
                </label>
                <select
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select shipping method</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="land">Land Transport</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  placeholder="Provide additional details about your requirement"
                />
              </div>
            </div>

            {/* AI Suggestion */}
            <div className="mt-6 p-4 bg-[#F8FAFC] rounded-lg border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="bg-[#2563EB] text-white p-2 rounded-lg">
                  <span className="text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">AI Suggestion:</span> Based on your requirements, 
                    we recommend specifying quality certifications and delivery timeline in the description 
                    to get better quotes.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-[#2563EB] text-white px-8 py-3 rounded-lg hover:bg-[#1E40AF] transition-colors flex items-center gap-2 font-medium"
              >
                <Send className="h-5 w-5" />
                Generate RFQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RFQGenerator;
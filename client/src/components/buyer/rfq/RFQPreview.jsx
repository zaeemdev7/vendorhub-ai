import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

const RFQPreview = ({ formData, onSubmit }) => {
  const { product, specifications, commercial, attachments } = formData;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Review RFQ</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
          <FileText size={18} />
          Export PDF
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-6">
        {/* Product Details */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Product Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Product Name</p>
              <p className="font-medium text-gray-800">{product.name || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-medium text-gray-800">{product.category || 'Not specified'}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">Description</p>
              <p className="font-medium text-gray-800">{product.description || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Quantity</p>
              <p className="font-medium text-gray-800">{product.quantity || 'Not specified'} {product.unit}</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Specifications */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Material</p>
              <p className="font-medium text-gray-800">{specifications.material || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-medium text-gray-800">{specifications.size || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Color</p>
              <p className="font-medium text-gray-800">{specifications.color || 'Not specified'}</p>
            </div>
            {specifications.customFields.length > 0 && (
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Custom Specifications</p>
                <div className="mt-1 space-y-1">
                  {specifications.customFields.map((field, idx) => (
                    <p key={idx} className="text-sm text-gray-800">
                      {field.key}: {field.value}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Commercial Terms */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Commercial Terms</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Budget Range</p>
              <p className="font-medium text-gray-800">
                ${commercial.budgetMin || '0'} - ${commercial.budgetMax || '0'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Delivery Date</p>
              <p className="font-medium text-gray-800">{commercial.deliveryDate || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Payment Terms</p>
              <p className="font-medium text-gray-800">{commercial.paymentTerms}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Shipping Method</p>
              <p className="font-medium text-gray-800">{commercial.shippingMethod.replace('_', ' ').toUpperCase()}</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Attachments */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Attachments</h3>
          {attachments.length > 0 ? (
            <div className="space-y-2">
              {attachments.map((file) => (
                <div key={file.id} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{file.name}</span>
                  <span className="text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No attachments uploaded</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
        >
          <CheckCircle size={20} />
          Send RFQ to Matching Vendors
        </button>
      </div>
    </div>
  );
};

export default RFQPreview;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Save, Send } from 'lucide-react';
import RFQForm from '../../components/buyer/rfq/RFQForm';
import ProductDetails from '../../components/buyer/rfq/ProductDetails';
import Specifications from '../../components/buyer/rfq/Specifications';
import CommercialTerms from '../../components/buyer/rfq/CommercialTerms';
import AttachmentsUpload from '../../components/buyer/rfq/AttachmentsUpload';
import RFQPreview from '../../components/buyer/rfq/RFQPreview';

const NewRFQ = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: {
      name: '',
      category: '',
      description: '',
      quantity: '',
      unit: 'pcs'
    },
    specifications: {
      material: '',
      size: '',
      color: '',
      customFields: []
    },
    commercial: {
      budgetMin: '',
      budgetMax: '',
      deliveryDate: '',
      paymentTerms: '30 days',
      shippingMethod: 'sea'
    },
    attachments: []
  });

  const totalSteps = 5;
  const steps = ['Product', 'Specs', 'Terms', 'Attachments', 'Preview'];

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting RFQ:', formData);
    // API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Create New RFQ</h1>
            <p className="text-gray-600 mt-1">Generate a professional Request for Quotation</p>
          </div>
          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <Save size={20} />
            Save Draft
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  ${currentStep > idx + 1 ? 'bg-green-500 text-white' : ''}
                  ${currentStep === idx + 1 ? 'bg-blue-600 text-white' : ''}
                  ${currentStep < idx + 1 ? 'bg-gray-200 text-gray-400' : ''}
                `}>
                  {currentStep > idx + 1 ? '✓' : idx + 1}
                </div>
                <span className={`
                  text-sm ml-2
                  ${currentStep >= idx + 1 ? 'text-gray-800 font-medium' : 'text-gray-400'}
                `}>
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <div className={`
                    w-12 h-0.5 mx-2
                    ${currentStep > idx + 1 ? 'bg-green-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          {currentStep === 1 && (
            <ProductDetails 
              data={formData.product} 
              updateData={(data) => updateFormData('product', data)} 
            />
          )}
          {currentStep === 2 && (
            <Specifications 
              data={formData.specifications} 
              updateData={(data) => updateFormData('specifications', data)} 
            />
          )}
          {currentStep === 3 && (
            <CommercialTerms 
              data={formData.commercial} 
              updateData={(data) => updateFormData('commercial', data)} 
            />
          )}
          {currentStep === 4 && (
            <AttachmentsUpload 
              data={formData.attachments} 
              updateData={(data) => updateFormData('attachments', data)} 
            />
          )}
          {currentStep === 5 && (
            <RFQPreview formData={formData} onSubmit={handleSubmit} />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            disabled={currentStep === 1}
          >
            <ChevronLeft size={18} />
            Back
          </button>
          
          {currentStep === totalSteps ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <Send size={18} />
              Send RFQ
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              Next
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewRFQ;
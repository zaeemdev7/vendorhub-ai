// src/pages/buyer/RFQDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Clock, 
  DollarSign, 
  Package, 
  Calendar,
  Download,
  Edit,
  Trash2,
  Send,
  MessageCircle,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const RFQDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rfq, setRfq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRfq({
        id: id,
        title: 'Cotton T-Shirts 10,000 pcs',
        description: 'Need 10,000 high-quality cotton t-shirts for our retail chain. Must be 100% combed ring-spun cotton, 180 GSM. Various sizes S-XXL. Colors: White, Black, Navy Blue.',
        status: 'active',
        date: '2024-01-15',
        quantity: 10000,
        unit: 'pcs',
        budget: 25000,
        category: 'Apparel & Clothing',
        material: '100% Cotton',
        size: 'S, M, L, XL, XXL',
        color: 'White, Black, Navy Blue',
        deliveryDate: '2024-03-15',
        paymentTerms: '30 days net',
        shippingMethod: 'Sea Freight',
        attachments: [
          { id: 1, name: 'Product_Specs.pdf', size: '2.4 MB' },
          { id: 2, name: 'Design_Reference.jpg', size: '1.2 MB' }
        ],
        quotesReceived: 4,
        quotes: [
          { id: 1, vendor: 'Premium Textiles Ltd.', price: 2.50, delivery: 15, status: 'received' },
          { id: 2, vendor: 'Global Manufacturing Co.', price: 2.30, delivery: 20, status: 'received' },
          { id: 3, vendor: 'FastEx Imports', price: 2.80, delivery: 10, status: 'pending' },
          { id: 4, vendor: 'EcoTextile Co.', price: 2.60, delivery: 18, status: 'received' }
        ]
      });
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading RFQ details...</p>
        </div>
      </div>
    );
  }

  if (!rfq) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={48} className="text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">RFQ Not Found</h2>
          <p className="text-gray-600 mt-2">The RFQ you're looking for doesn't exist.</p>
          <Link to="/buyer/rfqs" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            Back to RFQs
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    draft: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    active: 'bg-blue-100 text-blue-800',
    quotes: 'bg-green-100 text-green-800',
    closed: 'bg-red-100 text-red-800'
  };

  const getQuoteStatusBadge = (status) => {
    const configs = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      received: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
      accepted: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      rejected: { color: 'bg-red-100 text-red-800', icon: XCircle }
    };
    const config = configs[status] || configs.pending;
    const Icon = config.icon;
    return (
      <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon size={12} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/buyer/rfqs')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{rfq.title}</h1>
              <p className="text-gray-500 text-sm">RFQ #{rfq.id} • Created on {rfq.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[rfq.status]}`}>
              {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 size={20} className="text-red-500" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100">
            <div className="flex gap-6 px-6">
              {['overview', 'quotes', 'messages'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    py-4 text-sm font-medium capitalize border-b-2 transition-colors
                    ${activeTab === tab 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600">{rfq.description}</p>
                </div>

                <hr className="border-gray-100" />

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Product Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Category</span>
                        <span className="font-medium text-gray-800">{rfq.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Quantity</span>
                        <span className="font-medium text-gray-800">{rfq.quantity.toLocaleString()} {rfq.unit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Material</span>
                        <span className="font-medium text-gray-800">{rfq.material}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Size</span>
                        <span className="font-medium text-gray-800">{rfq.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Color</span>
                        <span className="font-medium text-gray-800">{rfq.color}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Commercial Terms</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Budget</span>
                        <span className="font-medium text-gray-800">${rfq.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Delivery Date</span>
                        <span className="font-medium text-gray-800">{rfq.deliveryDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Payment Terms</span>
                        <span className="font-medium text-gray-800">{rfq.paymentTerms}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Shipping Method</span>
                        <span className="font-medium text-gray-800">{rfq.shippingMethod}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Quotes Received</span>
                        <span className="font-medium text-blue-600">{rfq.quotesReceived}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Attachments */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Attachments</h3>
                  <div className="space-y-2">
                    {rfq.attachments.map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-blue-600" />
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-400">({file.size})</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                          <Download size={16} />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                    <Send size={18} />
                    Send to More Vendors
                  </button>
                  <Link
                    to={`/buyer/compare-quotes`}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <Users size={18} />
                    Compare Quotes
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <MessageCircle size={18} />
                    Message Vendors
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'quotes' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Received Quotes ({rfq.quotes.length})</h3>
                  <Link
                    to="/buyer/compare-quotes"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Compare All
                  </Link>
                </div>
                <div className="space-y-3">
                  {rfq.quotes.map((quote) => (
                    <div key={quote.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="font-medium text-gray-800">{quote.vendor}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <DollarSign size={14} className="text-blue-600" />
                            ${quote.price.toFixed(2)}/unit
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} className="text-blue-600" />
                            {quote.delivery} days
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getQuoteStatusBadge(quote.status)}
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div>
                <div className="text-center py-12">
                  <MessageCircle size={48} className="text-gray-300 mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">No Messages Yet</h3>
                  <p className="text-gray-500 mt-1">Start a conversation with your vendors</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQDetails;
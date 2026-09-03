import React, { useRef, useState } from 'react';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';

const AttachmentsUpload = ({ data, updateData }) => {
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0
    }));

    updateData([...data, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach(file => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          const updatedFiles = data.map(f => 
            f.id === file.id ? { ...f, status: 'completed', progress: 100 } : f
          );
          updateData(updatedFiles);
        } else {
          const updatedFiles = data.map(f => 
            f.id === file.id ? { ...f, progress } : f
          );
          updateData(updatedFiles);
        }
      }, 200);
    });
  };

  const removeFile = (id) => {
    updateData(data.filter(file => file.id !== id));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Attachments</h2>
      <p className="text-gray-600">Upload product images, drawings, or reference documents</p>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx"
        />
        
        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600 font-medium">Drop files here or click to browse</p>
        <p className="text-gray-400 text-sm mt-1">Supports: PDF, DOCX, JPG, PNG, XLSX (Max 20MB each)</p>
      </div>

      {/* File List */}
      {data.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Uploaded Files ({data.length})</h4>
          {data.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4 flex-1">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <File size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{file.name}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{formatFileSize(file.size)}</span>
                    {file.status === 'uploading' && (
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all"
                            style={{ width: `${file.progress}%` }}
                          />
                        </div>
                        <span>{file.progress}%</span>
                      </div>
                    )}
                    {file.status === 'completed' && (
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={16} />
                        Uploaded
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFile(file.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentsUpload;
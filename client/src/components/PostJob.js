import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publisherPosition: '',
    businessName: '',
    businessSector: '',
    jobType: '',
    salary: '',
    benefits: '',
    publisherName: '',
    contactInfo: ''
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 8) {
      setError('Maximum 8 images allowed');
      return;
    }
    setImages(Array.from(e.target.files));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images.length) {
      setError('At least one image (thumbnail) is required');
      return;
    }

    setLoading(true);
    const formPayload = new FormData();
    
    // Append form fields
    Object.keys(formData).forEach(key => {
      formPayload.append(key, formData[key]);
    });

    // Append images
    images.forEach(image => {
      formPayload.append('images', image);
    });

    try {
      await axios.post('http://localhost:5000/api/jobs', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/');
    } catch (err) {
      setError('Error posting job. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Job Title *</label>
          <input
            type="text"
            name="title"
            required
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Job Description *</label>
          <textarea
            name="description"
            required
            rows="4"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Your Position *</label>
          <input
            type="text"
            name="publisherPosition"
            required
            className="w-full p-2 border rounded"
            value={formData.publisherPosition}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Business Name</label>
            <input
              type="text"
              name="businessName"
              className="w-full p-2 border rounded"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Business Sector</label>
            <input
              type="text"
              name="businessSector"
              className="w-full p-2 border rounded"
              value={formData.businessSector}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Job Type *</label>
          <select
            name="jobType"
            required
            className="w-full p-2 border rounded"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="temporary">Temporary</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Salary *</label>
          <input
            type="text"
            name="salary"
            required
            className="w-full p-2 border rounded"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Benefits</label>
          <textarea
            name="benefits"
            rows="3"
            className="w-full p-2 border rounded"
            value={formData.benefits}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Your Full Name *</label>
          <input
            type="text"
            name="publisherName"
            required
            className="w-full p-2 border rounded"
            value={formData.publisherName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Contact Information *</label>
          <textarea
            name="contactInfo"
            required
            rows="2"
            className="w-full p-2 border rounded"
            value={formData.contactInfo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Images (First image will be thumbnail) *
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            required
            className="w-full p-2 border rounded"
            onChange={handleImageChange}
          />
          <p className="text-sm text-gray-500 mt-1">
            Upload up to 8 images. First image will be used as thumbnail.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </div>
  );
};

export default PostJob;
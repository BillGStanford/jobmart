import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
        setSelectedImage(response.data.thumbnail_image);
      } catch (err) {
        setError('Error loading job details');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error || !job) {
    return (
      <div className="text-center py-8 text-red-600">
        {error || 'Job not found'}
      </div>
    );
  }

  const additionalImages = job.additional_images
    ? job.additional_images.split(',')
    : [];

  const allImages = [job.thumbnail_image, ...additionalImages];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <div className="relative h-96 mb-4">
            <img
              src={`http://localhost:5000/uploads/${selectedImage}`}
              alt={job.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`flex-shrink-0 w-20 h-20 border-2 rounded ${
                    selectedImage === image ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={`http://localhost:5000/uploads/${image}`}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {job.job_type}
            </span>
          </div>
          
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
          >
            {showContact ? 'Hide Details' : 'Apply Now'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Job Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Salary</h3>
                <p>{job.salary}</p>
              </div>
              {job.benefits && (
                <div>
                  <h3 className="font-medium text-gray-700">Benefits</h3>
                  <p>{job.benefits}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <div className="space-y-4">
              {job.business_name && (
                <div>
                  <h3 className="font-medium text-gray-700">Business Name</h3>
                  <p>{job.business_name}</p>
                </div>
              )}
              {job.business_sector && (
                <div>
                  <h3 className="font-medium text-gray-700">Business Sector</h3>
                  <p>{job.business_sector}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="whitespace-pre-wrap">{job.description}</p>
        </div>

        {showContact && (
          <div className="animate-fade-in">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <span className="text-sm text-blue-600">Ready to apply</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700">Publisher</h3>
                  <p className="text-lg">{job.publisher_name}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Position</h3>
                  <p className="text-lg">{job.publisher_position}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Contact Details</h3>
                  <p className="text-lg whitespace-pre-wrap">{job.contact_info}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!showContact && (
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">Interested in this position?</p>
            <button
              onClick={() => setShowContact(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
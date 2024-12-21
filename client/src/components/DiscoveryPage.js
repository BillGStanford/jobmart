import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DiscoveryPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [jobType, setJobType] = useState('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    jobType: ''
  });

  // Job types for the filter
  const jobTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'temporary', label: 'Temporary' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'internship', label: 'Internship' }
  ];

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.jobType) params.append('jobType', filters.jobType);
      
      const response = await axios.get(`http://localhost:5000/api/jobs?${params}`);
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle job type selection changes
  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  // Apply filters when the search button is clicked or enter is pressed
  const applyFilters = (e) => {
    e.preventDefault();
    setFilters({
      search: search,
      jobType: jobType
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearch('');
    setJobType('');
    setFilters({
      search: '',
      jobType: ''
    });
  };

  return (
    <div>
      <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Discover Your Next Opportunity</h1>
      <h2 className="text-xl text-center text-gray-600 mb-4">Find jobs that fit your skills and passion.</h2>
      <h3 className="text-xl text-center text-gray-600 mb-12">Simple, Quick, & Easy</h3>
        
        <form onSubmit={applyFilters} className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Jobs
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by title, position..."
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            
            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                id="jobType"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={jobType}
                onChange={handleJobTypeChange}
              >
                <option value="">All Job Types</option>
                {jobTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={clearFilters}
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Clear Filters
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search Jobs
            </button>
          </div>
        </form>

        {/* Active filters display */}
        {(filters.search || filters.jobType) && (
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {filters.search && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Search: {filters.search}
              </span>
            )}
            {filters.jobType && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Type: {filters.jobType}
              </span>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Loading jobs...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">No jobs found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Clear filters and try again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`http://localhost:5000/uploads/${job.thumbnail_image}`}
                  alt={job.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-2">{job.publisher_position}</p>
                <p className="text-gray-500 text-sm mb-2">{job.publisher_name}</p>
                <p className="text-gray-700 line-clamp-3">{job.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {job.job_type}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscoveryPage;
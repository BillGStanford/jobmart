// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscoveryPage from './components/DiscoveryPage';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import Footer from './components/Footer'; // Import Footer component
import Terms from './components/terms'; // Import Terms component
import Privacy from './components/privacy'; // Import Privacy component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<DiscoveryPage />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/terms" element={<Terms />} /> {/* Add Terms route */}
            <Route path="/privacy" element={<Privacy />} /> {/* Add Privacy route */}
          </Routes>
        </main>
        <Footer /> {/* Include Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;

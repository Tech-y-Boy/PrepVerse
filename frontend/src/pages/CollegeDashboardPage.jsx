import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StreamSelector, { COURSE_TAGS } from '../components/dashboard/StreamSelector';
import CareerGrid from '../components/dashboard/CareerGrid';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getAllCareers } from '../services/careerService';

function CollegeDashboardPage() {
  const [allCareers, setAllCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(() => {
    const savedProfile = localStorage.getItem('collegeProfile');
    if (savedProfile) {
      const { course } = JSON.parse(savedProfile);
      return course || '';
    }
    return '';
  });

  useEffect(() => {
    getAllCareers()
      .then(setAllCareers)
      .catch(() => toast.error('Failed to load careers'))
      .finally(() => setLoading(false));
  }, []);

  const relevantTags = COURSE_TAGS[selectedCourse] || [];
  const filteredCareers = selectedCourse
    ? allCareers.filter((c) => c.tags.some((tag) => relevantTags.includes(tag)))
    : allCareers;

  if (loading) return <LoadingSpinner fullScreen />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 w-full">
        <h1 className="text-3xl font-bold dark:text-white mb-2">Explore Career Paths</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Select your course to see careers matched to you
        </p>

        <StreamSelector selected={selectedCourse} onSelect={setSelectedCourse} />

        <div className="mt-8">
          <CareerGrid careers={filteredCareers} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CollegeDashboardPage;
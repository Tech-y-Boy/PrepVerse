import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CareerCard from '../components/career/CareerCard';
import EmptyState from '../components/common/EmptyState';
import Badge from '../components/ui/Badge';

function ResultsPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('assessmentResult');
    if (stored) setResult(JSON.parse(stored));
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <EmptyState
          title="No results yet"
          description="Take the assessment first to see your matched careers."
          actionLabel="Take Assessment"
          onAction={() => navigate('/assessment')}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold dark:text-white mb-3">Your Career Matches</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Based on your answers, here's what suits you best
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {result.topTags.map((tag) => (
              <Badge key={tag} className="capitalize">{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {result.topCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResultsPage;
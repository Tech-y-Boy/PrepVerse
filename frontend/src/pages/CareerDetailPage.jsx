import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Heart, IndianRupee } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import RoadmapTimeline from '../components/career/RoadmapTimeline';
import PlannerBoard from '../components/career/PlannerBoard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import { getCareerById } from '../services/careerService';
import { getRoadmapSteps } from '../constants/roadmapSteps';

function CareerDetailPage() {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  function fetchCareer() {
    setLoading(true);
    setError(false);
    getCareerById(careerId)
      .then(setCareer)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchCareer();
  }, [careerId]);

  if (loading) return <LoadingSpinner fullScreen />;
  if (error || !career) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ErrorState message="Couldn't load this career." onRetry={fetchCareer} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10 w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-3">{career.stream}</Badge>
          <h1 className="text-3xl font-bold dark:text-white mb-3">{career.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-5">{career.description}</p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm bg-gray-50 dark:bg-surface-darkAlt px-4 py-2 rounded-lg">
              <IndianRupee size={16} className="text-primary-600" />
              <span className="dark:text-white font-medium">{career.salaryRange}</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-gray-50 dark:bg-surface-darkAlt px-4 py-2 rounded-lg">
              <Heart size={16} className="text-primary-600" />
              <span className="dark:text-white font-medium">WLB {career.wlbRating}/5</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-gray-50 dark:bg-surface-darkAlt px-4 py-2 rounded-lg">
              <TrendingUp size={16} className="text-primary-600" />
              <span className="dark:text-white font-medium">{career.growth} growth</span>
            </div>
          </div>
        </div>

        <Tabs tabs={['Overview', 'Roadmap', 'Planner']} active={activeTab} onChange={setActiveTab} />

        {activeTab === 'Overview' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold dark:text-white mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {career.skills?.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold dark:text-white mb-2">Entrance Exams</h3>
              <div className="flex flex-wrap gap-2">
                {career.entranceExams?.map((exam) => (
                  <Badge key={exam} color="warning">{exam}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Roadmap' && <RoadmapTimeline steps={getRoadmapSteps(career)} />}

        {activeTab === 'Planner' && <PlannerBoard careerId={career.id} />}
      </div>

      <Footer />
    </div>
  );
}

export default CareerDetailPage;
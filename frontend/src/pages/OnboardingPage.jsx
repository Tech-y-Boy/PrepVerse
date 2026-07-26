import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { School, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';
import RoleSelectCard from '../components/auth/RoleSelectCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuthStore } from '../store/useAuthStore';

const COURSES = ['B.Tech CSE', 'B.Tech Other', 'B.Com', 'B.Sc', 'BA', 'BBA', 'Other'];

function OnboardingPage() {
  const navigate = useNavigate();
  const updateRole = useAuthStore((s) => s.updateRole);
  const [role, setRole] = useState(null);
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  function handleContinue() {
    if (!role) {
      toast.error('Please select an option to continue');
      return;
    }
    if (role === 'college' && !course) {
      toast.error('Please select your course');
      return;
    }

    updateRole(role);
    // stash extra profile info in localStorage for the dashboard to use later
    if (role === 'college') {
      localStorage.setItem('collegeProfile', JSON.stringify({ course, year }));
    }

    navigate(role === 'class11' ? '/assessment' : '/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold dark:text-white mb-2">Tell us where you are</h1>
          <p className="text-gray-500 dark:text-gray-400">This helps us personalize your journey</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <RoleSelectCard
            icon={School}
            title="I'm in Class 11"
            description="Discover your ideal stream and career path"
            selected={role === 'class11'}
            onClick={() => setRole('class11')}
          />
          <RoleSelectCard
            icon={GraduationCap}
            title="I'm in College"
            description="Explore careers matched to your course"
            selected={role === 'college'}
            onClick={() => setRole('college')}
          />
        </div>

        {role === 'college' && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6 animate-in fade-in duration-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Course
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select course</option>
                {COURSES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <Input
              label="Year (optional)"
              placeholder="e.g. 2nd year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        )}

        <Button onClick={handleContinue} className="w-full py-3">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default OnboardingPage;
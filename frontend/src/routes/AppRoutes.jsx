import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import OnboardingPage from '../pages/OnboardingPage';
import AssessmentPage from '../pages/AssessmentPage';
import ResultsPage from '../pages/ResultsPage';
import CollegeDashboardPage from '../pages/CollegeDashboardPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/dashboard" element={<CollegeDashboardPage />} />
    </Routes>
  );
}

export default AppRoutes;
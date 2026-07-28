import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import OnboardingPage from '../pages/OnboardingPage';
import AssessmentPage from '../pages/AssessmentPage';
import ResultsPage from '../pages/ResultsPage';
import CollegeDashboardPage from '../pages/CollegeDashboardPage';
import CareerDetailPage from '../pages/CareerDetailPage';
import ProtectedRoute from '../components/common/ProtectedRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/onboarding"
        element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>}
      />
      <Route
        path="/assessment"
        element={<ProtectedRoute><AssessmentPage /></ProtectedRoute>}
      />
      <Route
        path="/results"
        element={<ProtectedRoute><ResultsPage /></ProtectedRoute>}
      />
      <Route
        path="/dashboard"
        element={<ProtectedRoute><CollegeDashboardPage /></ProtectedRoute>}
      />
      <Route
        path="/career/:careerId"
        element={<ProtectedRoute><CareerDetailPage /></ProtectedRoute>}
      />
    </Routes>
  );
}

export default AppRoutes;
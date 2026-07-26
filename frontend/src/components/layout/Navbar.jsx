import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-surface-dark/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <GraduationCap size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg dark:text-white">PrepVerse</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#how-it-works" className="hover:text-primary-600 transition-colors">How it works</a>
          <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => navigate('/login')}>Log in</Button>
          <Button onClick={() => navigate('/signup')}>Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
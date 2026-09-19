import { useState, useEffect } from 'react';
import { User, Mail, BookMarked, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import CareerGrid from '../components/dashboard/CareerGrid';
import { useAuthStore } from '../store/useAuthStore';
import { getAllCareers } from '../services/careerService';

function ProfilePage() {
  const navigate = useNavigate();
  const { user, bookmarks, logout } = useAuthStore();
  const [bookmarkedCareers, setBookmarkedCareers] = useState([]);

  useEffect(() => {
    if (bookmarks.length) {
      getAllCareers().then((all) =>
        setBookmarkedCareers(all.filter((c) => bookmarks.includes(c.id)))
      );
    } else {
      setBookmarkedCareers([]);
    }
  }, [bookmarks]);

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12 w-full">
        <Card className="mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <h1 className="text-xl font-bold dark:text-white">{user?.name || 'User'}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mt-1">
                <Mail size={14} /> {user?.email}
              </p>
              {user?.role && (
                <Badge className="mt-2 capitalize">
                  {user.role === 'class11' ? 'Class 11 Student' : 'College Student'}
                </Badge>
              )}
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-2 mb-4">
          <BookMarked size={18} className="text-primary-600" />
          <h2 className="font-semibold text-lg dark:text-white">Saved Careers</h2>
        </div>

        <CareerGrid careers={bookmarkedCareers} />

        <Button
          variant="outline"
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2"
        >
          <LogOut size={16} /> Log out
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default ProfilePage;
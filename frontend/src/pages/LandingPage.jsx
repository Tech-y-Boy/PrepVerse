import { useNavigate } from 'react-router-dom';
import { Compass, ClipboardCheck, Map, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <Badge className="mb-5">🎓 For Class 11 & College Students</Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white mb-5">
          Find your career path <br className="hidden md:block" />
          <span className="text-primary-600">before you get lost</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Take a smart assessment, discover careers matched to you, and get a
          step-by-step roadmap — whether you're picking a stream or planning
          life after college.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="px-6 py-3 flex items-center gap-2"
            onClick={() => navigate('/signup?role=class11')}
          >
            I'm in Class 11 <ArrowRight size={16} />
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 flex items-center gap-2"
            onClick={() => navigate('/signup?role=college')}
          >
            I'm in College <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: ClipboardCheck, title: 'Take the assessment', desc: 'Answer questions about your interests, values, and strengths.' },
          { icon: Compass, title: 'Get matched careers', desc: 'See career paths matched to you, with salary and lifestyle info.' },
          { icon: Map, title: 'Follow your roadmap', desc: 'Get a clear step-by-step plan and track your progress.' },
        ].map((item, i) => (
          <Card key={i} className="text-center">
            <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
              <item.icon size={22} className="text-primary-600" />
            </div>
            <h3 className="font-semibold dark:text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
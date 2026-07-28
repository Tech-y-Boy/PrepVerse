import { motion } from 'framer-motion';
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
      <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center"
>
  {/* baaki content wahi rehne do jo pehle se hai */}
</motion.section>

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
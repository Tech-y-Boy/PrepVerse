import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ClipboardCheck, Map, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-5 inline-flex items-center gap-1.5">
            <Sparkles size={12} /> For Class 11 & College Students
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white mb-5">
            Find your career path <br className="hidden md:block" />
            <span className="text-primary-600">before you get lost</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Take a smart assessment, discover careers matched to you, and get a
            step-by-step roadmap — whether you're picking a stream or planning
            life after college.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              className="px-6 py-3 flex items-center gap-2"
              onClick={() => navigate('/signup')}
            >
              I'm in Class 11 <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 flex items-center gap-2"
              onClick={() => navigate('/signup')}
            >
              I'm in College <ArrowRight size={16} />
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-14 text-center">
            {[
              { value: '10+', label: 'Career paths mapped' },
              { value: '5 min', label: 'Assessment time' },
              { value: '100%', label: 'Free to use' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white mb-2">How it works</h2>
          <p className="text-gray-500 dark:text-gray-400">Three simple steps to clarity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ClipboardCheck, title: 'Take the assessment', desc: 'Answer questions about your interests, values, and strengths.' },
            { icon: Compass, title: 'Get matched careers', desc: 'See career paths matched to you, with salary and lifestyle info.' },
            { icon: Map, title: 'Follow your roadmap', desc: 'Get a clear step-by-step plan and track your progress.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-semibold dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="rounded-2xl bg-primary-600 px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to find your path?
          </h2>
          <p className="text-primary-100 mb-6 max-w-md mx-auto">
            Join now and get personalized career guidance in under 5 minutes.
          </p>
          <Button
            variant="secondary"
            className="px-6 py-3 !bg-white !text-primary-700 hover:!bg-gray-50"
            onClick={() => navigate('/signup')}
          >
            Get started — it's free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import AssessmentProgress from '../components/assessment/AssessmentProgress';
import OptionButton from '../components/assessment/OptionButton';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getQuestions } from '../services/assessmentService';
import { getAllCareers } from '../services/careerService';
import { calculateResult } from '../utils/scoring';

function AssessmentPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions()
      .then((data) => setQuestions(data))
      .catch(() => toast.error('Failed to load questions'))
      .finally(() => setLoading(false));
  }, []);

  function handleSelect(option) {
    setSelectedOption(option);
  }

  async function handleNext() {
    if (!selectedOption) {
      toast.error('Please select an option');
      return;
    }

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // last question — calculate result and navigate
      try {
        const careers = await getAllCareers();
        const result = calculateResult(newAnswers, careers);
        localStorage.setItem('assessmentResult', JSON.stringify(result));
        navigate('/results');
      } catch {
        toast.error('Failed to calculate results');
      }
    }
  }

  function handleBack() {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    setAnswers(answers.slice(0, -1));
    setSelectedOption(null);
  }

  if (loading) return <LoadingSpinner fullScreen />;
  if (!questions.length) return null;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl">
        <AssessmentProgress current={currentIndex + 1} total={questions.length} />

        <h2 className="text-xl md:text-2xl font-bold dark:text-white mb-6">
          {currentQuestion.text}
        </h2>

        <div className="flex flex-col gap-3 mb-8">
          {currentQuestion.options.map((option, i) => (
            <OptionButton
              key={i}
              text={option.text}
              selected={selectedOption === option}
              onClick={() => handleSelect(option)}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="ghost" onClick={handleBack} disabled={currentIndex === 0}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {currentIndex + 1 === questions.length ? 'See my results' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPage;
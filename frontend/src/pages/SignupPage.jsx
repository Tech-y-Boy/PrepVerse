import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuthStore } from '../store/useAuthStore';
import { validateEmail, validatePassword, validateName } from '../utils/validators';

function SignupPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirmPassword: form.password !== form.confirmPassword ? 'Passwords do not match' : '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      login({ name: form.name, email: form.email, role: null });
      toast.success('Account created!');
      setLoading(false);
      navigate('/onboarding');
    }, 600);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center mb-3">
            <GraduationCap size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold dark:text-white">Create your account</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Start your career journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input label="Full name" name="name" placeholder="Aarav Sharma" value={form.name} onChange={handleChange} error={errors.name} />
          <Input label="Email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
          <Input label="Password" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} error={errors.password} />
          <Input label="Confirm password" name="confirmPassword" type="password" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
          <Button type="submit" disabled={loading} className="mt-2">
            {loading ? 'Creating account...' : 'Sign up'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
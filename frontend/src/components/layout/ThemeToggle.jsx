import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-darkAlt transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-gray-700" />}
    </button>
  );
}

export default ThemeToggle;
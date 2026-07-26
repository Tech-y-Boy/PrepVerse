import { cn } from '../../utils/cn';

function OptionButton({ text, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150',
        selected
          ? 'border-primary-600 bg-primary-50 dark:bg-primary-500/10'
          : 'border-gray-200 dark:border-gray-800 hover:border-primary-300 bg-white dark:bg-surface-darkAlt'
      )}
    >
      <span className="text-sm font-medium dark:text-white">{text}</span>
    </button>
  );
}

export default OptionButton;
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-surface-darkAlt dark:text-primary-500',
  outline: 'border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-surface-darkAlt',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-surface-darkAlt',
};

function Button({ children, variant = 'primary', className, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
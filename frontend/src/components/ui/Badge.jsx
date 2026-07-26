import { cn } from '../../utils/cn';

const colors = {
  primary: 'bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-500',
  success: 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
};

function Badge({ children, color = 'primary', className }) {
  return (
    <span className={cn('inline-block px-2.5 py-1 rounded-full text-xs font-medium', colors[color], className)}>
      {children}
    </span>
  );
}

export default Badge;
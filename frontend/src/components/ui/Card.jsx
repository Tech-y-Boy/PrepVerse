import { cn } from '../../utils/cn';

function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-darkAlt p-5 shadow-sm hover:shadow-lg transition-shadow duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
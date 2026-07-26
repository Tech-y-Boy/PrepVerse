import { cn } from '../../utils/cn';

function LoadingSpinner({ fullScreen }) {
  return (
    <div className={cn('flex items-center justify-center', fullScreen && 'min-h-screen')}>
      <div className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
import Button from '../ui/Button';

function ErrorState({ message = 'Something went wrong', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="text-5xl mb-4">⚠️</div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{message}</p>
      {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </div>
  );
}

export default ErrorState;
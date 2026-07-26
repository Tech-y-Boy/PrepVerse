function AssessmentProgress({ current, total }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
        <span>Question {current} of {total}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default AssessmentProgress;
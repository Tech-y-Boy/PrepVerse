import { CheckCircle2, Circle } from 'lucide-react';

function RoadmapTimeline({ steps }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800" />
      <div className="flex flex-col gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-8 top-0 bg-white dark:bg-surface-dark">
              {i === 0 ? (
                <CheckCircle2 size={24} className="text-primary-600" />
              ) : (
                <Circle size={24} className="text-gray-300 dark:text-gray-700" />
              )}
            </div>
            <h4 className="font-semibold dark:text-white mb-1">{step.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadmapTimeline;
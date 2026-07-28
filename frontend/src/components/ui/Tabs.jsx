import { cn } from '../../utils/cn';

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 border-b border-gray-200 dark:border-gray-800 mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            'px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
            active === tab
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
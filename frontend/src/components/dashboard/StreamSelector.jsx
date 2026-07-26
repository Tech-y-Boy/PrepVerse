import { cn } from '../../utils/cn';

const COURSE_TAGS = {
  'B.Tech CSE': ['tech', 'analytical'],
  'B.Tech Other': ['tech', 'science'],
  'B.Com': ['commerce', 'business'],
  'B.Sc': ['science', 'analytical'],
  'BA': ['humanities', 'arts', 'social'],
  'BBA': ['business', 'leadership'],
  'Other': [],
};

function StreamSelector({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(COURSE_TAGS).map((course) => (
        <button
          key={course}
          onClick={() => onSelect(course)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
            selected === course
              ? 'bg-primary-600 text-white border-primary-600'
              : 'bg-white dark:bg-surface-darkAlt border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-400'
          )}
        >
          {course}
        </button>
      ))}
    </div>
  );
}

export { COURSE_TAGS };
export default StreamSelector;
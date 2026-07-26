import { cn } from '../../utils/cn';

function RoleSelectCard({ icon: Icon, title, description, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 hover:-translate-y-0.5',
        selected
          ? 'border-primary-600 bg-primary-50 dark:bg-primary-500/10 shadow-md'
          : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-darkAlt hover:border-primary-300'
      )}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
          selected ? 'bg-primary-600' : 'bg-primary-50 dark:bg-primary-500/10'
        )}
      >
        <Icon size={22} className={selected ? 'text-white' : 'text-primary-600'} />
      </div>
      <h3 className="font-semibold text-lg dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default RoleSelectCard;
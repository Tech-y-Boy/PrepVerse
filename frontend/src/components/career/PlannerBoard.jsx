import { useState, useEffect } from 'react';
import { Circle, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const DEFAULT_TASKS = [
  { id: 't1', text: 'Research colleges & entrance exams', status: 'todo' },
  { id: 't2', text: 'Create a study schedule', status: 'todo' },
  { id: 't3', text: 'Talk to someone already in this field', status: 'todo' },
  { id: 't4', text: 'Shortlist 3-5 target colleges', status: 'todo' },
  { id: 't5', text: 'Register for relevant entrance exam', status: 'todo' },
];

const COLUMNS = [
  { key: 'todo', label: 'To Do', icon: Circle, color: 'text-gray-400' },
  { key: 'inprogress', label: 'In Progress', icon: Clock, color: 'text-amber-500' },
  { key: 'done', label: 'Done', icon: CheckCircle2, color: 'text-green-500' },
];

function PlannerBoard({ careerId }) {
  const storageKey = `planner_${careerId}`;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setTasks(saved ? JSON.parse(saved) : DEFAULT_TASKS);
  }, [careerId]);

  function updateStatus(taskId, newStatus) {
    const updated = tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
    setTasks(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }

  function cycleStatus(task) {
    const order = ['todo', 'inprogress', 'done'];
    const nextIndex = (order.indexOf(task.status) + 1) % order.length;
    updateStatus(task.id, order[nextIndex]);
  }

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {COLUMNS.map((col) => (
        <div key={col.key} className="bg-gray-50 dark:bg-surface-darkAlt rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <col.icon size={16} className={col.color} />
            <h4 className="font-semibold text-sm dark:text-white">{col.label}</h4>
            <span className="text-xs text-gray-400 ml-auto">
              {tasks.filter((t) => t.status === col.key).length}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {tasks
              .filter((t) => t.status === col.key)
              .map((task) => (
                <button
                  key={task.id}
                  onClick={() => cycleStatus(task)}
                  className={cn(
                    'text-left text-sm p-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary-400 transition-colors',
                    task.status === 'done' && 'line-through text-gray-400'
                  )}
                >
                  {task.text}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlannerBoard;
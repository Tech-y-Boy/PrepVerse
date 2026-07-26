import { useNavigate } from 'react-router-dom';
import { TrendingUp, Heart } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

function CareerCard({ career }) {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer hover:-translate-y-1"
      onClick={() => navigate(`/career/${career.id}`)}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg dark:text-white">{career.title}</h3>
        {career.matchPercent && (
          <Badge color="success">{career.matchPercent}% match</Badge>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
        {career.description}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
        <span className="flex items-center gap-1">
          💰 {career.salaryRange}
        </span>
        <span className="flex items-center gap-1">
          <Heart size={12} /> WLB {career.wlbRating}/5
        </span>
        <span className="flex items-center gap-1">
          <TrendingUp size={12} /> {career.growth}
        </span>
      </div>
    </Card>
  );
}

export default CareerCard;
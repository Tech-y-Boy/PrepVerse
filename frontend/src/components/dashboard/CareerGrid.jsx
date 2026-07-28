import { motion } from 'framer-motion';
import CareerCard from '../career/CareerCard';
import EmptyState from '../common/EmptyState';

function CareerGrid({ careers }) {
  if (!careers.length) {
    return (
      <EmptyState
        title="No matching careers found"
        description="Try selecting a different course to see relevant career paths."
      />
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {careers.map((career, i) => (
        <motion.div
          key={career.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
        >
          <CareerCard career={career} />
        </motion.div>
      ))}
    </div>
  );
}

export default CareerGrid;
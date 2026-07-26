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
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
}

export default CareerGrid;
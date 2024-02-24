import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Card = ({ planet }) => {

  if (!planet || !planet.name) {
    return <div>Error: Invalid planet data</div>;
  }

  return (
    <div className="bg-amber-500 p-3 rounded-sm flex w-full">
      {/* Image using Tailwind CSS image classes */}
      <div className="flex h-10">
        <h2 className="text-lg font-semibold mb-2 ml-2">{planet.name}</h2>
        <p className="text-white mb-2 ml-4">Climate:{planet.climate}</p>
        <p className="text-white mb-2 ml-4">Gravity:{planet.gravity}</p>
        <p className="text-white mb-2 ml-4">Population:{planet.population}</p>
      </div>
      {/* Planet information using Tailwind CSS heading and text classes */}
      {/* Add more details or interaction as needed */}
    </div>
  );
};

Card.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }),
};

export default Card;

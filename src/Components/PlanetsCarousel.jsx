// import  { useState, useEffect } from 'react';
// import Card from './Cards'; // Import your Card component

// const PlanetsCarousel = () => {
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     const fetchPlanetData = async () => {
//       try {
//         const response = await fetch('https://swapi.dev/api/planets/?format=json');
//         const fetchedPlanets = await response;
//         const processedPlanets = fetchedPlanets.results.map((planet) => ({
//           name: planet.name,
//           climate: planet.climate,
//           gravity: planet.gravity,
//           population: planet.population,
//           // Add other desired properties here
//         }));
//         setPlanets(processedPlanets);
//       } catch (error) {
//         console.error('Error fetching planets:', error);
//         // Handle error gracefully (e.g., display error message)
//       }
//     };

//     fetchPlanetData();
//   }, [planets]);

//   return (
//     <div className='w-3/4 m-auto h-[450px] rounded-xl bg-white mt-20'>
//       {/* <div className='mt-20'>
//         {planets.map((planet) => (
//           <div key={planet.name}>
//             <Card value={planet} />
//           </div>
//         ))}
//       </div> */}



// <div id="default-carousel" className="relative justify-center items-center pt-24" data-carousel="static">
    
//       <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
         
//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           {planets.map((planet) => (
//           <div key={planet.name}>
//             <Card planet={planet} />
//           </div>
//         ))}
//           </div>
//       </div>
      
//       <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//       </div>
     
//       <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//               <span className="hidden">Previous</span>
//           </span>
//       </button>
//       <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//               <span className="hidden">Next</span>
//           </span>
//       </button>
//   </div>
//     </div>
//   );
// };

// export default PlanetsCarousel;

import  { useState, useEffect } from 'react';
import Card from './Cards'; // Import your Card component


const PlanetsCarousel = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/?format=json');
        console.log(response)
        const fetchedPlanets = await response.json();
        console.log(fetchedPlanets)
        setPlanets(prevPlanets => {
          console.log(fetchedPlanets);
          const processedPlanets = fetchedPlanets.results.map((planet) => ({
            name: planet.name,
            climate: planet.climate,
            gravity: planet.gravity,
            population: planet.population,
          }));
          console.log(processedPlanets);
          return processedPlanets;
        });
      } catch (error) {
        console.error('Error fetching planets:', error);
        // Handle error gracefully (e.g., display error message)
      }
    };

    fetchPlanetData();
  }, []);

  return (
    <div className='w-3/4 m-auto h-auto rounded-xl bg-white'>
      <div className='mt-20'>
        {/* Check if planets array is not empty before rendering */}
        {planets.length > 0 ? (
          planets.map((planet, index) => (
            <div key={index}>
            <Card planet={planet} />
          </div>
          ))
        ) : (
          <p>No planets available</p>
        )}
      </div>
    </div>
  );
};

export default PlanetsCarousel;

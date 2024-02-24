import axios from 'axios';

const fetchPlanets = async () => {
  try {
    const response = await axios.get('https://swapi.dev/api/planets/?format=json');
    return response.data.results.map((planet) => {

      return {
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population,
        residents: planet.residents,
        
      };
      
    });
  } catch (error) {
    console.error('Error fetching planets:', error);
   
  }
};



export default fetchPlanets;


import { useState , useEffect } from "react";
import Loader from "./sideComp/Loader";
import Header from "./Components/Header";
import PlanetsCarousel from "./Components/PlanetsCarousel";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
         setTimeout(() => {
          setIsLoading(false);
         },2000);
  },[])

  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 animate-gradient-x">
    <div className="min-h-screen bg-gradient-to-r from-gray-800 from-blue-500 to-black animate-gradient-x">
      {
        isLoading ? (
          <Loader />) : (
            <>
            <Header />
            <PlanetsCarousel />
            </>
          )

        

      }

    </div>
  );
}
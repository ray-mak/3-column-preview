import React from "react";
import Sedan from "./assets/icon-sedans.svg";
import Suv from "./assets/icon-suvs.svg";
import Luxury from "./assets/icon-luxury.svg";
import Card from "./Card";

function App() {
  return (
    <div className="card--container">
      <Card 
        class="sedan"
        img={Sedan}
        title="SEDANS"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card 
        class="suv"
        img={Suv}
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card 
        class="luxury"
        img={Luxury}
        title="LUXURY"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
      
    </div>
  )
}

export default App

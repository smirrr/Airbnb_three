import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data.js"

function App() {
  const newarray = Data.map( (each) =>{
    return (<Card 
              img={each.coverImg}
              rating={each.stats.rating}
              reviewCount={each.stats.reviewCount}
              location={each.location}
              title={each.title}
              price={each.price}
              openspots={each.openSpots}
              />
            ) 
  })

  return (
    <div>
    <Navbar />
    <Hero/>
    <section className="cardssec">
    {newarray}
    </section>
    
    
    </div>
  )
}

export default App;

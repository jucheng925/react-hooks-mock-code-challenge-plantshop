import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setAllPlants(data))
  }, [])

  function addNewPlant(newPlant) {
    setAllPlants([...allPlants, newPlant])
  }

  function searchPlant(term) {
    const plantsToDisplay = allPlants.filter(plant => {
      if (term === null) return true
      else return plant.name.toLowerCase().includes(term.toLowerCase())
    })
  }

  return (
    <main>
      <NewPlantForm onAdd={addNewPlant}/>
      <Search onSearch={searchPlant}/>
      <PlantList plants={allPlants}/>
    </main>
  );
}

export default PlantPage;

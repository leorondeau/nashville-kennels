import React, { useContext, useEffect , useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"


export const AnimalList = (props) => {
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)
  
    const[ filteredAnimals , setFiltered ] = useState([])
    
    
    
    // debugger
    useEffect(() => {
        // debugger
        getAnimals()
    }, [])
    
    useEffect(() => {
        // Use startsWith to filter by first letter
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])
    // debugger
    return (
        <>

            <h1>Animals</h1>
            <button onClick={() => props.history.push("animals/create")}>
                Add Animal
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}
import React, {useContext , useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"


export const AnimalList = (props) => {
    const { animals , getAnimals } = useContext(AnimalContext)
    const { locations , getLocations } = useContext(LocationContext)
    const { customers , getCustomers } = useContext(CustomerContext)
    
    useEffect(() => {
      getLocations()
      .then(getCustomers)
      .then(getAnimals)

    }, [])
    
    
    useEffect(() => {
        
    }, [animals])
    
    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("animals/create")}>
                Add Animal
            </button>
            {
                animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                // console.log("owner" ,owner.name)
                const clinic = locations.find(l => l.id ===animal.locationId)
                // console.log("customer" , customer)
                
                return <Animal key = {animal.id} 
                location={clinic}
                customer={owner}
                animal={animal} />
            })
        }
        </div>
    )
}
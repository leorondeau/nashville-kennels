import React, {useContext , useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"


export const AnimalList = () => {
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
            {
                animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id ===animal.locationId)

                return <Animal key = {animal.id} 
                               location={clinic}
                               customer={owner}
                               animal={animal} />
                })
            }
        </div>
    )
}
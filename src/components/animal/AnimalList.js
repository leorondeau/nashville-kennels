import React, {useContext , useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    const { animals , getAnimals } = useContext(AnimalContext)

    
    useEffect(() => {
        // console.log("LocationList: Initial render before data")
        getAnimals()
    }, [])
    
    
    useEffect(() => {
        
    }, [animals])
    
    return (
        <div className="animals">
            {
                animals.map(an => <Animal key = {an.id} animal = {an} />)
            }
        </div>
    )
}
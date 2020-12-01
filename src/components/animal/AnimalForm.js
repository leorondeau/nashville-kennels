import React , { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const customerName = useRef(null)
    const location = useRef(null)
    const name = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    const constructNewAnimal = () => {

        const locationId = parseInt(location.current.value)
        const customerId = parseInt(customerName.current.value)
        const animalName = name.current.value
        const breedType = breed.current.value

        if (locationId === 0 || customerId === 0 || animalName === "") {
            window.alert("Please select a location and an owner and provide animal name and breed")
        } else {
            addAnimal({
                name: animalName,
                breed: breedType,
                locationId,
                customerId
            })
                .then(() => props.history.push("/animals"))
        }
    }


    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form__group">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />

                </div>
            </fieldset>
            <fieldset>
                <div className="form__group">
                    <label htmlFor="animalBreed">Animal Name:</label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location</label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control">
                        <option value="0"> Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Caretaker</label>
                        <select defaultValue="" name="customer" ref={customerName} id="customerAnimal" className="form-control">
                            <option value="0">Select a caretaker</option>
                            {customers.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                    Save Animal
                </button>
        </form>
    )

}
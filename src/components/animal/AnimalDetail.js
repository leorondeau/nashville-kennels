import React , { useContext , useEffect , useState } from "react"
import { AnimalContext } from "./AnimalProvider"

import "./Animal.css"

export const AnimalDetail = (props) => {
    const { releaseAnimal , getAnimalById , updateAnimal  } = useContext(AnimalContext)
    // If useState did not have initial render of location: {}, customer: {}} it show undefined
    const [animal , setAnimal] = useState({ location: {}, customer: {}})
    // const returnValueOfUseStateFucntion = useState({ location: {}, customer: {}})
    // const animal = returnValueOfUseStateFucntion[0]
    // const setAnimal = returnValueOfUseStateFucntion[1]
    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
        .then(setAnimal)
        // .then(parsedAnimal => setAnimal(parsedAnimal))
        // console.log(setAnimal)
    }, [])
    // debugger
    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <button onClick = {
                () => {

                    releaseAnimal(animal.id)
                    // or releaseAnimal(props.match.params.animalId)
                    .then(() => {
                        props.history.push("/animals")
                    })
                }
            }>
            Release Animal
            </button>
            <button onClick={
                () => {
                updateAnimal(props.match.params.animalId)
                .then(() => {
                props.history.push(`/animals/edit/${animal.id}`)
            })
        }
        }>Edit</button>
        </section>
    )
}
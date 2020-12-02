import React , { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = (props) => {
    const { setSearchTerms } = useContext(AnimalContext)

    return (
        <>
            Animal search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value.toLowerCase())
                }
                placeholder = "Search for an animal... " />
                </>
    )
}
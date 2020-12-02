import React, { useState, useEffect } from "react"

/* 

useState() 
It is used to store data about the component. 
You can translate its usage into English with the following statement.

*/

/*

useEffect()
It is used to respond to changes in the component's state. 
You can translate its usage into English with the following statement.

*/

/*
    The context is imported and used by individual components
    that need data
*/


/*
Context allows other components access to the data.
Nothing is stored when it's defined.
*/
export const LocationContext = React.createContext()


/*
Defines the data provider component that will allow
other components to use the data in the context. 
Define a single property for each provider that is defined 
in the system.
*/

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }


    const addLocation = location => {
    return fetch("http://localhost:8088/locations" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(location)
    })
    .then(getLocations)
}

/*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
   return (
       <LocationContext.Provider value={{
           locations , addLocation , getLocations
       }}>
           {props.children}
       </LocationContext.Provider>
   )
    }
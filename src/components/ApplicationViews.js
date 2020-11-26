import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = (props) => {
  return (
      <> 
      {/* Exact needed or it will also match the other routes because
      they all have "/ in the path" */}
        <LocationProvider>
            <Route exact path="/">
                <LocationList />
            </Route>
        </LocationProvider>
      {/* Link and Route are complimentary to each other.
      If a Link is added it must have a corresponding route */}
        <AnimalProvider>
            <Route path="/animals">
                <AnimalList />
            </Route>
        </AnimalProvider>
        
        <EmployeeProvider>
            <Route path="/employees">
                <EmployeeList />
            </Route>
        </EmployeeProvider>

        <CustomerProvider>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </CustomerProvider>
        </>

  )  
}


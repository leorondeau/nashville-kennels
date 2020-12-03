import React, { useState } from "react"

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees , setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
            })
            .then(getEmployees)
    }

    const releaseEmployee = employeeid => {
        return fetch(`http://localhost:8088/employees/${employeeid}`, {
            method: "DELETE",
        })
        .then(getEmployees)

    }

    return (
        <EmployeeContext.Provider value = {{
            employees , addEmployee , getEmployees , releaseEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
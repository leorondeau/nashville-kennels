import React, { useContext , useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees , getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    useEffect(() => {

    }, [employees])
    

    return (
        <div className="employees">
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </div>
    )
    
}


import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])


    return (
        <div className="employees">
            <h1>Employees</h1>
            {/*  */}
            
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employeeList">
                {
                    employees.map(emp => {
                        return <Link key={emp.id} to={`/employees/${emp.id}`}>
                        <h3>{emp.name}</h3>
                        </Link>
                })
            }
            </article>
        </div>
    )

}


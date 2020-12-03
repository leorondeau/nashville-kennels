import React , { useState , useEffect , useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeDetail = (props) => {
    const { animals , getAnimals } = useContext(AnimalContext)
    const { locations , getLocations } = useContext(LocationContext)
    const { employees , getEmployees , releaseEmployee } = useContext(EmployeeContext)


    // The DOM is always reflecting what's in useState()
    // useState(the initial state goes in here)
    const [animal , setAnimal] = useState({})
    const [employee , setEmployee] = useState({})
    const [location , setLocation] = useState({})
    
    // Without these useState() definitions the useEffects below would return undefined
    // useEffect called anytime 
    useEffect(() => {
        getEmployees()
        .then(getLocations)
        .then(getAnimals)
    } , [])

    useEffect(() => {
        const animal = animals.find(a => a.id === employee.animalId) || {}
        setAnimal(animal)
    }, [animals])

    useEffect(() => {
    // If .find returns undefined then set employee = to an empty object {} which is the initial state of employee
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [employees])

    useEffect(() => {
        const location = locations.find(l => l.id === employee.locationId) || {}
        setLocation(location)
    }, [locations])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <div>
                {
                    (employee.animalId === null)
                    ? "Not assigned to an animal"
                    : `Currently taking care of ${animal.name}`
                }
            </div>
            <button onClick={
                () => {
                    releaseEmployee(props.match.params.employeeId)
                    .then(() => {
                        props.history.push("/employees")
                    })
                }
            }>Release Employee</button>
        </section>
    )
}
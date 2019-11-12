import React from 'react'
import Employee from './Employee'

const EmployeesList = (props) => {

    const employeesList = props.employees.length ? 
        (props.employees.map(employee => {
            return (
                <Employee data = { employee }/>
            )
        })):(
            <p>Loading...</p>
        )
    

    return (
        <div>
            { employeesList }
        </div>
    )
}

export default EmployeesList
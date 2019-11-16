import React from 'react'
import Employee from './Employee'

class EmployeesList extends React.Component {

    state = {
        panelName: "EmployeesList"
    }

    render() {

        const divStyle = {
            display: this.props.activePanel===this.state.panelName ? "block" : "none"
        }

        const employeesList = this.props.employees.length ?
            (this.props.employees.map(employee => {
                return (
                    <Employee key={employee._id} data={employee} refreshEmployees={ this.props.refreshEmployees } />
                )
            })) : (
                <p>Loading...</p>
            )

        return (
            <div style={ divStyle }> 
                {employeesList}

                <button onClick={ () => { this.props.changeActivePanel("AddEmployeeForm") } }>Add employee</button>
            </div>
        )
    }

}

export default EmployeesList
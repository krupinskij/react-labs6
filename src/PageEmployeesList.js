import React from 'react'
import Employee from './Employee'
import { Link } from "react-router-dom";

class PageEmployeesList extends React.Component {

	render() {

		const containerStyle = {
			width: '100%'
		}

		const buttonStyle = {
			width: '50%',
			height: '50px',
			margin: '10px 25%',

			backgroundColor: '#0b0',
			border: '0',
			borderRadius: '10px',
			boxShadow: '0 0 5px #000',

			fontSize: '120%',
			color: 'white',

			cursor: 'pointer'
		}

		const divStyle = {
			display: 'flex',
			flexWrap: 'wrap'
		}

		const modalStyle = {
			width: '100%',
			padding: '5% 0',

			fontSize: '200%',
			fontFamily: 'Arial, Helvetica, sans-serif',
			textAlign: 'center',

			background: 'gray',
			color: 'white'
		}

		const employeesList = this.props.employees.length ?
			(this.props.employees.map(employee => {
				return (
					<Employee key={employee.id} data={employee} refreshEmployees={this.props.refreshEmployees} />
				)
			})) : (
				<div style={modalStyle}>Loading...</div>
			)

		return (
			<div style={containerStyle}>
				<div style={divStyle}>
					{employeesList}
				</div>

				<Link to="/new">
					<button style={buttonStyle}>
						Create new employee
					</button>
				</Link>
			</div>
		)
	}

}

export default PageEmployeesList
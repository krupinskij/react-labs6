import React from 'react'

class Employee extends React.Component {

	state = {
		modalStyle: {
			position: 'absolute',
			width: '100%',
			left: '0',
			top: '30%',
			padding: '5% 0',

			fontSize: '200%',
			fontFamily: 'Arial, Helvetica, sans-serif',
			textAlign: 'center',

			background: 'gray',
			color: 'white',
			display: 'none',

			zIndex: '1'
		},

		
	}

	deleteEmployee = event => {

		this.setState({
			modalStyle: {
				position: 'absolute',
				width: '100%',
				left: '0',
				top: '30%',
				padding: '5% 0',
	
				fontSize: '200%',
				fontFamily: 'Arial, Helvetica, sans-serif',
				textAlign: 'center',
	
				background: 'gray',
				color: 'white',
				display: 'block',
	
				zIndex: '1'
	
			}
		})

		fetch('http://localhost:3000/employees/' + this.props.data.id, {
			method: 'DELETE',
		}).then(() => {
			this.setState({
				modalStyle: {
					position: 'absolute',
					width: '100%',
					left: '0',
					top: '30%',
					padding: '5% 0',
		
					fontSize: '200%',
					fontFamily: 'Arial, Helvetica, sans-serif',
					textAlign: 'center',
		
					background: 'gray',
					color: 'white',
					display: 'none',
		
					zIndex: '1'
		
				}
			})
			this.props.refreshEmployees()
		});
	}

	render() {

		const containerStyle = {
			position: 'relative',
			borderRadius: '10px',
			boxShadow: '1px 3px 7px grey',

			width: '30%',
			minWidth: '300px',
			margin: '5px',
			padding: '10px 0 10px 30px'
		}

		const buttonStyle = {

			position: 'absolute',
			top: '10px',
			right: '10px',

			height: '40px',
			width: '40px',
			border: '0',
			borderRadius: '50%',

			fontSize: '120%',
			backgroundColor: '#b00',
			color: 'white',

			boxShadow: '0 0 5px #000',

			cursor: 'pointer'
		}

		return (

			<div style={containerStyle}>
				<div style={this.state.modalStyle}>
					Deleting...
        </div>

				<p>Name: {this.props.data.name}</p>
				<p>Age: {this.props.data.age}</p>
				<p>Active: {this.props.data.isActive ? "Yes" : "No"}</p>
				<p>Company: {this.props.data.company}</p>
				<p>Email: {this.props.data.email}</p>

				<button style={buttonStyle} onClick={this.deleteEmployee}>X</button>
			</div>
		)
	}
}

export default Employee
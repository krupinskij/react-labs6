import React from 'react'
import { Link, withRouter } from "react-router-dom";

class PageEmployee extends React.Component {

	state = {
		name: "",
		age: "",
		company: "",
		email: "",
		isActive: false,

		busy: false,

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

			zIndex: '1'

		}
	}

	handleValueChange = (event) => {
		const value = event.target.value;
		const name = event.target.name
		
		this.setState((prevState, props) => ({
			[name]: value
		}))
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			_id: this.state._id,
			name: this.state.name,
			age: +this.state.age,
			company: this.state.company,
			email: this.state.email,
			isActive: this.state.isActive === "on" ? true : false
		}

		event.target.reset();
		this.setState({
			busy: true
		})


		fetch('http://localhost:3004/employees', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
		.then(() => {
			this.props.refreshEmployees()
			.then(() => this.props.history.push('/'));
		});
	}

	render() {

		const divStyle = {
			position: 'relative',
			borderRadius: '10px',
			boxShadow: '1px 3px 7px grey',
			margin: '30px 20%',
			fontSize: '175%'
		}

		const formStyle = {
			padding: '5% 30px',
		}

		const gridStyle = {
			display: 'grid',
			gridTemplateColumns: '1fr 3fr',
			gap: '20px',
		}

		const labelStyle = {
			justifySelf: 'flex-end'
		}

		const inputStyle = {
			justifySelf: 'flex-start',
			width: '90%',

			padding: '5px 15px',
			fontSize: '90%'
		}

		const checkboxStyle = {
			justifySelf: 'flex-start'
		}

		const buttonsStyle = {
			width: '70%',
			margin: '30px 15% 0 15%'
		}

		const submitStyle = {
			width: '30%',
			height: '40px',
			margin: '0 10%',

			backgroundColor: '#0b0',
			border: '0',
			borderRadius: '10px',
			boxShadow: '0 0 5px #000',

			fontSize: '100%',
			color: 'white',

			cursor: 'pointer'
		}

		const cancelStyle = {
			width: '30%',
			height: '40px',
			margin: '0 10%',

			backgroundColor: '#b00',
			border: '0',
			borderRadius: '10px',
			boxShadow: '0 0 5px #000',

			fontSize: '100%',
			color: 'white',

			cursor: 'pointer'
		}

		return (
			
			<div style={divStyle}>
				{
					this.state.busy && <div style={this.state.modalStyle}> Saving... </div>
				}

				<form onSubmit={this.handleSubmit} style={formStyle} method="POST" action="">

					<div style={gridStyle} >
						<label style={labelStyle} htmlFor="addNewInp">Name:</label>
						<input style={inputStyle} type="text" name="name" id="addNameInp" onChange={this.handleValueChange} />

						<label style={labelStyle} htmlFor="addAgeInp">Age:</label>
						<input style={inputStyle} type="number" name="age" id="addAgeInp" onChange={this.handleValueChange} />

						<label style={labelStyle} htmlFor="addCompanyInp">Company:</label>
						<input style={inputStyle} type="text" name="company" id="addCompanyInp" onChange={this.handleValueChange} />

						<label style={labelStyle} htmlFor="addEmailInp">Email:</label>
						<input style={inputStyle} type="email" name="email" id="addEmailInp" onChange={this.handleValueChange} />

						<label style={labelStyle} htmlFor="addActiveInp">Active:</label>
						<input style={checkboxStyle} type="checkbox" name="isActive" id="addActiveInp" onChange={this.handleValueChange} />

					</div>

					<div style={buttonsStyle}>
						<input style={submitStyle} type="submit" value="Save" />
						<Link to="/">
							<input style={cancelStyle} type="reset" value="Cancel" />
						</Link>
					</div>

				</form>
			</div>
		)
	}
}

export default withRouter(PageEmployee)
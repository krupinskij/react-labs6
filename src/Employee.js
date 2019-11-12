import React from 'react'

class Employee extends React.Component {


    render() {

        const containerStyle = {
			border: '1px solid black',
		}
        return (
            <div style={ containerStyle }>
                <p>ID: {this.props.data._id }</p>
                <p>Name: {this.props.data.name }</p>
                <p>Age: {this.props.data.age }</p>
                <p>IsActive: {this.props.data.isActive }</p>
                <p>Company: {this.props.data.company }</p>
                <p>Email: {this.props.data.email }</p>
            </div>
        )
    }
}

export default Employee
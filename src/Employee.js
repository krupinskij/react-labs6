import React from 'react'

class Employee extends React.Component {

    state = {
        modalStyle: {
            position: 'absolute',
            height: '20%',
            width: '100%',
    
            background: 'gray',
            display: 'none'
    
        }
    }

    deleteEmployee = event => {

        this.setState({
            modalStyle: {
                position: 'absolute',
                height: '20%',
        
                background: 'gray',
                display: 'block'
        
            }
        })

        fetch('http://localhost:3000/employees/' +  this.props.data.id, {
          method: 'DELETE',
        }).then( () => {
            this.setState({
                modalStyle: {
                    position: 'absolute',
                    height: '20%',
            
                    background: 'gray',
                    display: 'none'
            
                }
            })
            this.props.refreshEmployees()
        });
    }

    render() {

        const containerStyle = {
			border: '1px solid black',
		}
        return (
            <div style={ containerStyle }>
                <div style={ this.state.modalStyle }>
                    Deleting...
                </div>

                <p>ID: {this.props.data.id }</p>
                <p>Name: {this.props.data.name }</p>
                <p>Age: {this.props.data.age }</p>
                <p>IsActive: {this.props.data.isActive }</p>
                <p>Company: {this.props.data.company }</p>
                <p>Email: {this.props.data.email }</p>

                <button onClick={ this.deleteEmployee }>Skasuj</button>
            </div>
        )
    }
}

export default Employee
import React from 'react'
import EmployeesList from './EmployeesList'

class App extends React.Component {

  state = {
    employees: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/employees`)

      .then(resp => resp.json())
      .then(resp => {

        this.setState({
          employees: resp
        })

      })
  }

  render() {

    
      return (
        <div>
          <EmployeesList employees={this.state.employees} />
        </div>
      )
    
    
  }
}

export default App
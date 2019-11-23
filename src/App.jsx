import React from 'react'
import EmployeesList from './EmployeesList'
import AddEmployeeForm from './AddEmployeeForm'

class App extends React.Component {

  state = {
    employees: [],
    activePanel: "EmployeesList"
  }

  componentDidMount() {
    fetch(`http://localhost:3004/employees`)

      .then(resp => resp.json())
      .then(resp => {

        this.setState({
          employees: resp
        })
      })
  }

  refreshEmployees = event => {

    fetch(`http://localhost:3004/employees`)

      .then(resp => resp.json())
      .then(resp => {

        this.setState({
          employees: resp,
        })

      })
  }

  changeActivePanel = (activePanelName) => {
    this.setState({
      activePanel: activePanelName
    })
  }

  render() {


    return (
      <div>
        <EmployeesList employees={this.state.employees}
          refreshEmployees={ this.refreshEmployees }
          changeActivePanel={this.changeActivePanel} activePanel={this.state.activePanel} />

        <AddEmployeeForm refreshEmployees={ this.refreshEmployees } changeActivePanel={this.changeActivePanel} activePanel={this.state.activePanel} />
      </div>
    )


  }
}

export default App
import React from 'react'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'

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

    return fetch(`http://localhost:3004/employees`)

      .then(resp => resp.json())
      .then(resp => {

        this.setState((prevState, props) => ({
          employees: resp
        }))

      })
  }

  changeActivePanel = (activePanelName) => {
    this.setState((prevState, props) => ({
      activePanel: activePanelName
    }))
  }

  render() {

    if (this.state.activePanel === "EmployeesList") {
      return(
        <div>
          <PageEmployeesList employees={this.state.employees}
            refreshEmployees={ this.refreshEmployees }
            changeActivePanel={this.changeActivePanel} activePanel={this.state.activePanel} />

        </div>
      )
    } else {
      return(
        <div>
          <PageEmployee refreshEmployees={ this.refreshEmployees } changeActivePanel={this.changeActivePanel} activePanel={this.state.activePanel} />
      
        </div>
      )
    }
    
  }
}

export default App
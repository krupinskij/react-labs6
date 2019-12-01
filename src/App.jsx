import React from 'react'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends React.Component {

  state = {
    employees: []
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

  render() {

    return(
      <Router>
          <Route exact path="/">
            <PageEmployeesList employees={this.state.employees} refreshEmployees={ this.refreshEmployees } >
            </PageEmployeesList>
          </Route>

          <Route path="/new">
            <PageEmployee refreshEmployees={ this.refreshEmployees } >
            </PageEmployee>
          </Route>
      </Router>
    )    
  }
}

export default App
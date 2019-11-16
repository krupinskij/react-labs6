import React from 'react'

class AddEmployeeForm extends React.Component {

    state = {
        panelName: "AddEmployeeForm",

        _id: "",
        name: "",
        age: "",
        company: "",
        email: "",
        isActive: false,

        modalStyle: {
            position: 'absolute',
            height: '20%',
            width: '100%',
    
            background: 'gray',
            display: 'none'
    
        }


    }

    handleValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state);
    }

    handleSubmit = (event) => {
        console.log(event.target);
        event.preventDefault();

        const data = {
            _id: this.state._id,
            name: this.state.name,
            age: +this.state.age,
            company: this.state.company,
            email: this.state.email,
            isActive: this.state.isActive==="on" ? true : false
        }

        event.target.reset();
        this.setState({
            modalStyle: {
                position: 'absolute',
                height: '20%',
        
                background: 'gray',
                display: 'block'
        
            }
        })


        fetch('http://localhost:3000/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then( () => {
            this.setState({
                modalStyle: {
                    position: 'absolute',
                    height: '20%',
            
                    background: 'gray',
                    display: 'none'
            
                }
            })
            this.props.refreshEmployees(),
            this.props.changeActivePanel("EmployeesList")
        });
      }

      modalStyle = {
        position: 'absolute',
        height: '20%',

        background: 'gray',
        display: 'none'

    }

    render() {

        const divStyle = {
            display: this.props.activePanel === this.state.panelName ? "block" : "none"
        }

        const formStyle = {
            border: '1px solid black',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }
        
        return(
            <div style={ divStyle }>
                <div style={ this.state.modalStyle }>
                    Saving...
                </div>
                <form onSubmit={ this.handleSubmit } style={ formStyle } method="POST" action="">

                    <label htmlFor="addNewInp">Podaj identyfikator</label>
                    <input type="text" name="_id" id="addIdInp" onChange={ this.handleValueChange } />

                    <label htmlFor="addNewInp">Podaj imię i nazwisko</label>
                    <input type="text" name="name" id="addNameInp" onChange={ this.handleValueChange } />

                    <label htmlFor="addAgeInp">Podaj wiek</label>
                    <input type="number" name="age" id="addAgeInp" onChange={ this.handleValueChange } />

                    <label htmlFor="addCompanyInp">Podaj nazwę firmy</label>
                    <input type="text" name="company" id="addCompanyInp" onChange={ this.handleValueChange } />

                    <label htmlFor="addEmailInp">Podaj maila</label>
                    <input type="email" name="email" id="addEmailInp" onChange={ this.handleValueChange } />

                    <label htmlFor="addActiveInp">Zaznacz jeśli aktywny</label>
                    <input type="checkbox" name="isActive" id="addActiveInp" onChange={ this.handleValueChange } />

                    <input type="submit" value="Zapisz"/>
                    <input type="reset" value="Skasuj" onClick={ () => { this.props.changeActivePanel("EmployeesList") } }/>
                </form>
            </div>
        )
    }
}

export default AddEmployeeForm
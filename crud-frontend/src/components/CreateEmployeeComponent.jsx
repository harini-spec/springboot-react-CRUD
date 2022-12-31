import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName : '',
            lastName  : '',
            email     : ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changelastNameHandler  = this.changelastNameHandler.bind(this);
        this.changeEmailHandler     = this.changeEmailHandler.bind(this);
        this.saveEmployee           = this.saveEmployee.bind(this);

        }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email}; // javascript object
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployees(employee).then(res => {  // after success response, we redirect/naviagte to the lists page 
            this.props.navigate('/employees');
        });
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }

    changelastNameHandler(event){
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler(event){
        this.setState({email: event.target.value})
    }

    cancel(){
        this.props.navigate('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Employee Form</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>First Name:</label>
                                            <input placeholder="First Name" name="firstName" className='form-control' 
                                            value={this.state.firstName} onChange={event => this.changeFirstNameHandler(event)}/>
                                        </div>
                                        <div className='form-group'>
                                            <label>Last Name:</label>
                                            <input placeholder="Last Name" name="lastName" className='form-control' 
                                            value={this.state.lastName} onChange={event => this.changelastNameHandler(event)}/>
                                        </div>
                                        <div className='form-group'>
                                            <label>Email:</label>
                                            <input placeholder="Email" name="Email" className='form-control' 
                                            value={this.state.email} onChange={event => this.changeEmailHandler(event)}/>
                                        </div>

                                        <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                        {/* can bind like this too */}

                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateEmployeeComponent {...props} navigate={navigate} />
}

export default WithNavigate
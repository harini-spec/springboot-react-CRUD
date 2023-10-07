import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id        : window.location.pathname.split("/")[2],
            firstName : '',
            lastName  : '',
            email     : ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changelastNameHandler  = this.changelastNameHandler.bind(this);
        this.changeEmailHandler     = this.changeEmailHandler.bind(this);
        this.UpdateEmployee         = this.UpdateEmployee.bind(this);

        }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName : employee.firstName, lastName : employee.lastName, email : employee.email})
        });
    }

    UpdateEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email}; // javascript object
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
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
                <br></br>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <br></br>
                            <h3 className='text-center'>Update Employee Form</h3>
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
                                        <br></br>
                                        <button className='btn btn-success' onClick={this.UpdateEmployee}>Update</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>

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
    return <UpdateEmployeeComponent {...props} navigate={navigate}/>
}

export default WithNavigate;
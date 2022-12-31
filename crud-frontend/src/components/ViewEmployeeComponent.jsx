import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            id        : window.location.pathname.split("/")[2],
            employee  : {}
        }
    }

    componentDidMount(){ // for rest api call
        EmployeeService.getEmployeeById(this.state.id).then((res) =>{
            this.setState({employee: res.data}); // easy to initialize as we don't have to assign for each and every variable 

        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3 bg-light'> {/* grid, at center */}
                    <h3 className='text-center card-header' style = {{marginBottom:"10px"}}>View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row' style = {{marginBottom:"10px"}}>
                            <label>Employee First Name: {this.state.employee.firstName}</label>
                        </div>
                        <div className='row' style = {{marginBottom:"10px"}}>
                            <label>Employee Last Name: {this.state.employee.lastName}</label>
                        </div>
                        <div className='row' style = {{marginBottom:"10px"}}>
                            <label>Employee Email Id: {this.state.employee.email}</label>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default ViewEmployeeComponent;
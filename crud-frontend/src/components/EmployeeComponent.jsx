import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees:response.data});
        })
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((response) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id != id)});
        })
    }

    viewEmployee(id){
        this.props.navigate(`/view-employee/${id}`);
    }

    addEmployee(){
        // const{navigate} = "/add-employee";
        // this.props.history.push('/add-employee')
        this.props.navigate('/add-employee');
    }

    editEmployee(id){
        this.props.navigate(`/update-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 style={{marginTop: "10px"}} className='text-center'>Employees List</h2>

                {/* <div className='row'> */}
                    <button style={{marginBottom: "10px"}} className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                {/* </div> */}

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={()=> this.editEmployee(employee.id)}>Update</button>
                                            <button style={{marginLeft: "10px"}} className='btn btn-danger' onClick={()=> this.deleteEmployee(employee.id)}>Delete</button>
                                            <button style={{marginLeft: "10px"}} className='btn btn-info' onClick={()=> this.viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <EmployeeComponent {...props} navigate={navigate} />
}

export default WithNavigate


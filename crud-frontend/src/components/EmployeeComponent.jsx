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

    }

    componentDidMount(){
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees:response.data});
        })
    }

    addEmployee(){
        // const{navigate} = "/add-employee";
        // this.props.history.push('/add-employee')
        this.props.navigate('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>

                {/* <div className='row'> */}
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
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


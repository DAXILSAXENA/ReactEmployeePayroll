import React from "react";
import Header from "../header/header";
import './dashboard.css';
import UserService from '../../service/userService/User';
import FormDialog from "./formdialog";

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            employees: [],
            openDialogBox: false,
            tempEmployee: ''
        }
    }

    componentDidMount() {
        UserService.getAllUser().then((data) => {
            console.log(data.data.data)
            this.setState({ employees: data.data.data });
            console.log(this.state.employees);
        })
    }

    delete(id) {
        UserService.deleteUser(id).then(data => {
            console.log(id);
            this.componentDidMount();
        });
    }

    openDialogBox = (employee) => {
        console.log(employee);
        this.setState({openDialogBox: !this.state.openDialogBox});
        // console.log(this.state.openDialogBox);
        this.setState({tempEmployee : employee})
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-content">
                    <div className="header-content">
                        <div className="emp-detail-text">
                            Employee Details
                            <div className="emp-count"></div>
                        </div>
                        <a className="add-button" href="/registration">
                            + Add User
                        </a>
                    </div>
                    <div className="table-main">
                        <table className="table">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                                {
                                    this.state.employees.map(employee =>
                                        <tr key={employee.employeeId}>
                                            <td>
                                                <img className="profile" src={employee.profilePic} alt="" />
                                            </td>
                                            <td>
                                                {employee.name}
                                            </td>
                                            <td>
                                                {employee.gender}
                                            </td>
                                            <td>
                                                <div className="dept-label">
                                                    {employee.department.map(
                                                        (dept) => <tr>{dept}</tr>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {employee.salary}
                                            </td>
                                            <td>
                                                {employee.createdDate}
                                            </td>
                                            <td>
                                                <img id={employee.employeeId} src="../assets/icons/delete-black-18dp.svg" alt="delete" onClick={() => this.delete(employee.employeeId)}></img>
                                                <img id={employee.employeeId} src="../assets/icons/create-black-18dp.svg" alt="update" onClick={() => this.openDialogBox(employee)}></img>
                                            </td>
                                        </tr>

                                    )}
                            </tbody>
                        </table>
                    </div>
                    <FormDialog openDialogBox={this.state.openDialogBox} employee={this.state.tempEmployee}></FormDialog>
                </div>
            </div >
        )
    }

}
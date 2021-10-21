import React from 'react';
import Header from '../header/header';
import '../registration/registration.css';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import UserService from '../../service/userService/User';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: '',
            department: [],
            profilePic: '',
            gender: '',
            salary: '',
            createdDate: new Date(),
            note: '',
        }
    }

    departments = [
        {
            name: "HR",
            value: "HR",
        },
        {
            name: "Sales",
            value: "Sales",
        },
        {
            name: "Finance",
            value: "Finance",
        },
        {
            name: "Engineer",
            value: "Engineer",
        },
        {
            name: "Other",
            value: "Other",
        },
    ]

    handleChangeName = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
        console.log(this.state.name);

    }

    handleChangeProfilePic = (e) => {
        console.log(e.target.value);
        this.setState({ profilePic: e.target.value });
    }

    handleChangeGender = (e) => {
        console.log(e.target.value);
        this.setState({ gender: e.target.value });
    }

    handleChangeDepartment = (e) => {
        let newDepartment = e.target.value;
        console.log(e.target.value);
        this.setState(dept => ({ department: [...dept.department, newDepartment] }));
        console.log(this.state.department);
    }

    handleChangeSalary = (e) => {
        console.log(e.target.value);
        this.setState({ salary: e.target.value });
    }

    handleChangeDate = (date) => {
        console.log(date);
        this.setState({ createdDate: date });
    }

    handleChangeNote = (e) => {
        console.log(e.target.value);
        this.setState({ note: e.target.value });
    }

    formSubmit = (e) => {
        console.log(this.state);
        let employee = {
            name: this.state.name,
            profilePic: this.state.profilePic,
            gender: this.state.gender,
            department: this.state.department,
            salary: this.state.salary,
            createdDate: this.state.createdDate,
            note: this.state.note,
        }

        UserService.addUser(employee).then((data) => {
            console.log(data);
            this.props.history.push("/");
        })
        
    }

    departments = [
        {
            name: "HR",
            value: "HR",
        },
        {
            name: "Sales",
            value: "Sales",
        },
        {
            name: "Finance",
            value: "Finance",
        },
        {
            name: "Engineer",
            value: "Engineer",
        },
        {
            name: "Other",
            value: "Other",
        },
    ]

    render() {
        return (
            <div>
                <Header />
                <div className="form-content">
                    <form className="form" >
                        <div className="form-head">Employee Payroll form </div>
                        {/* Input Name */}
                        <div className="row-content">
                            <FormLabel className="label text">Name</FormLabel>
                            <TextField onChange={this.handleChangeName} className="name-input" size="small" />
                        </div>
                        {/* Profile Image */}
                        <div className="row-content">
                            <FormLabel className="label text">Profile Image</FormLabel>
                            <div className="profile-radio-content">
                                <RadioGroup row onChange={this.handleChangeProfilePic}>
                                    <FormControlLabel control={<Radio />} value="../assets/profile-images/Ellipse -1.png" label={
                                        <img className="profile" src="/assets/profile-images/Ellipse -1.png" alt='' />}
                                    />
                                    <FormControlLabel control={<Radio />} value="../assets/profile-images/Ellipse -2.png" label={
                                        <img className="profile" src="/assets/profile-images/Ellipse -2.png" alt='' />}
                                    />
                                    <FormControlLabel control={<Radio />} value="../assets/profile-images/Ellipse -3.png" label={
                                        <img className="profile" src="/assets/profile-images/Ellipse -3.png" alt='' />}
                                    />
                                    <FormControlLabel control={<Radio />} value="../assets/profile-images/Ellipse -4.png" label={
                                        <img className="profile" src="/assets/profile-images/Ellipse -4.png" alt='' />}
                                    />
                                    <FormControlLabel control={<Radio />} value="../assets/profile-images/Ellipse -5.png" label={
                                        <img className="profile" src="/assets/profile-images/Ellipse -5.png" alt='' />}
                                    />
                                </RadioGroup>
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="row-content">
                            <FormLabel className="label text">Gender</FormLabel>
                            <div>
                                <RadioGroup row onChange={this.handleChangeGender}>
                                    <FormControlLabel control={<Radio />} value="male" label="male">
                                    </FormControlLabel>
                                    <FormControlLabel control={<Radio />} value="female" label="female">
                                    </FormControlLabel>
                                </RadioGroup>
                            </div>
                        </div>
                        {/* Department */}
                        <div className="row-content">
                            <FormLabel className="label text">Department</FormLabel>
                            {this.departments.map((department, i) =>
                                <FormControlLabel control={<Checkbox />} label={department.name} key={i}
                                    value={department.name} onChange={this.handleChangeDepartment} />
                            )}
                        </div>
                        {/* Salary */}
                        <div className="row-content">
                            <FormLabel className="label text">Choose your Salary</FormLabel>
                            <Box sx={{ width: 1000 }}>
                                <Slider
                                    defaultValue={400000} valueLabelDisplay="auto" step={1000} min={300000} max={500000} onChange={this.handleChangeSalary}
                                />
                            </Box>
                        </div>
                        {/* Start Date */}
                        <div className="row-content">
                            <FormLabel className="label text">Start Date</FormLabel>
                            <DatePicker className="text-field" selected={this.state.createdDate} onChange={this.handleChangeDate} />
                        </div>
                        {/* Notes */}
                        <div className="row-content">
                            <FormLabel className="label text">Notes</FormLabel>
                            <TextField fullWidth multiline rows={4} onChange={this.handleChangeNote} />
                        </div>
                        {/* Button */}
                        <div className="buttonParent">
                            <a href="/">
                                <Button variant="outlined" className="button cancelButton">Cancel</Button>
                            </a>
                            <div className="submit-reset">
                                <Button variant="outlined" className="button submitButton" onClick={this.formSubmit} >Submit</Button>
                                <Button variant="outlined" type="reset" className="button resetButton">Reset</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);
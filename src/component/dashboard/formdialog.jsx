import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
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
import { DialogContent } from '@mui/material';
import UserService from '../../service/userService/User';


function FormDialog({ openDialogBox, employee }) {
    
    var [employeeId, setEmployeeID] = React.useState(employee.employeeId)
    var [name, setName] = React.useState(employee.name);
    var [note, setNote] = React.useState(employee.note);
    var [profilePic, setProfilePic] = React.useState(employee.profilePic);
    var [gender, setGender] = React.useState(employee.gender);
    var [salary, setSalary] = React.useState(employee.salary);
    var [createdDate, setCreatedDate] = React.useState(new Date(employee.createdDate));
    var [department, setDepartment] = React.useState([]);

    // console.log(employee.name);
    // console.log(name);
    // console.log(department);
    
    React.useEffect( () => {
        setEmployeeID(employee.employeeId)
    },[employee.employeeId])

    React.useEffect( () => {
        setName(employee.name)
    },[employee.name])

    React.useEffect( () => {
        setNote(employee.note)
    },[employee.note])

    React.useEffect( () => {
        setProfilePic(employee.profilePic)
    },[employee.profilePic])

    React.useEffect( () => {
        setGender(employee.gender)
    },[employee.gender])

    React.useEffect( () => {
        setSalary(employee.salary)
    },[employee.salary])

    React.useEffect( () => {
        setCreatedDate(employee.createdDate)
    },[employee.createdDate])

    let departments = [
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

   let handleChangeName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
        // console.log(this.state.name);

    }

    let handleChangeProfilePic = (e) => {
        console.log(e.target.value);
        setProfilePic(e.target.value);
    }

    let handleChangeGender = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
    }

    let handleChangeDepartment = (e) => {
        let newDepartment = e.target.value;
        console.log(e.target.value);
        setDepartment(department => [...department, newDepartment]);
        
    }

    let handleChangeSalary = (e) => {
        console.log(e.target.value);
        setSalary(e.target.value);
    }

    let handleChangeDate = (date) => {
        console.log(date);
        setCreatedDate(date);
    }

    let handleChangeNote = (e) => {
        console.log(e.target.value);
        setNote(e.target.value);
    }

    let formUpdate = (e) => {
        let empID = employeeId
        let employee = {
            name: name,
            profilePic: profilePic,
            gender: gender,
            department: department,
            salary: salary,
            createdDate: createdDate,
            note: note,
        }
        
        UserService.updateUser(employee,empID).then((data) => {
            console.log(data);
            // this.props.history.push("/");
        })
        
        
    }

    return (
        <div>
            <Dialog open={openDialogBox} fullWidth={true} maxWidth={'xl'}>
                <DialogTitle>Update Form</DialogTitle>
                <DialogContent>
                    <div className="form-content">
                        <form className="form" >
                            <div className="form-head">Employee Payroll form </div>
                            {/* Input Name */}
                            <div className="row-content">
                                <FormLabel className="label text">Name</FormLabel>
                                <TextField onChange={handleChangeName}  className="name-input" size="small" value={name}></TextField>
                            </div>
                            {/* Profile Image */}
                            <div className="row-content">
                                <FormLabel className="label text">Profile Image</FormLabel>
                                <div className="profile-radio-content">
                                    <RadioGroup row value={profilePic} onChange={handleChangeProfilePic}>
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
                                    <RadioGroup row value={gender} onChange={handleChangeGender}>
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
                                {departments.map((department, i) =>
                                    <FormControlLabel control={<Checkbox />} label={department.name} key={i}
                                        value={department.name} onChange={handleChangeDepartment}/>
                                )}
                            </div>
                            {/* Salary */}
                            <div className="row-content">
                                <FormLabel className="label text">Choose your Salary</FormLabel>
                                <Box sx={{ width: 1000 }}>
                                    <Slider
                                        value={salary} valueLabelDisplay="auto" step={1000} min={300000} max={500000} onChange={handleChangeSalary}
                                    />
                                </Box>
                            </div>
                            {/* Start Date */}
                            <div className="row-content">
                                <FormLabel className="label text">Start Date</FormLabel>
                                <DatePicker className="text-field" selected={new Date(createdDate)} onChange={handleChangeDate}/>
                            </div>
                            {/* Notes */}
                            <div className="row-content">
                                <FormLabel className="label text">Notes</FormLabel>
                                <TextField fullWidth multiline rows={4} value={note} onChange={handleChangeNote}/>
                            </div>
                            {/* Button */}
                            {/* <div className="buttonParent">
                            <a href="/">
                                <Button variant="outlined" className="button cancelButton">Cancel</Button>
                            </a>
                            <div className="submit-reset">
                                <Button variant="outlined" className="button submitButton">Submit</Button>
                                <Button variant="outlined" type="reset" className="button resetButton">Reset</Button>
                            </div>
                        </div> */}
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <a href="/">
                        <Button>Cancel</Button>
                    </a>
                    <Button onClick={formUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FormDialog;

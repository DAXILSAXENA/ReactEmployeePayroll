import React from "react";
import './header.css';

export default class Header extends React.Component {

    render() {
       return( <header className="header-content header">
            <div className="logo-content">
                <img src="/assets/images/logo.png" alt="Logo Image"></img>
                <div className="logo-text-content">
                    <span class="emp-text">EMPLOYEE</span>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>)
    }

}
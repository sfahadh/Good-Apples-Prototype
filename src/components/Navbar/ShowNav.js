import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

class ShowNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className='nav-links'>
                        <h4><Link to="/">Home</Link></h4>
                        <h4><Link to="contact">Contact</Link></h4>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ShowNav
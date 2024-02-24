import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';


export default function Navbar(props) {
    return (
        <>
            <header className="nav">
                <div className="logo">{props.title}</div>
                <div className="list">
                    <ul className="list-in">
                        <li className="items">Home</li>
                        <li className="items">About</li>
                        <li className="items">{props.services}</li>
                        <li className="items">Blog</li>
                        <li className="items">Contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    services: PropTypes.string
}
Navbar.defaultProps ={
    services:"Service",
    title:"LOGO",
}
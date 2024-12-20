import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    const [lastModifiedDate, setLastModifiedDate] = useState('');

    useEffect(() => {
        // Get the last modified date from the document
        const dateModified = document.lastModified;

        // Format the date (optional)
        const formattedDate = new Date(dateModified).toLocaleString();

        // Set the formatted date in the state
        setLastModifiedDate(formattedDate);
    }, []);
    return (
        <footer>
            <nav>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/services">Services</Link> &nbsp;
                <Link to="/askvet">Ask the Vet</Link> &nbsp;
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <p>
                Copyright &copy; 2024 Fish Creek Animal Clinic<br />
                <a
                    href="mailto:yourfirstname@yourlastname.com">yourfirstname@yourlastname.com

                </a>
            </p>
            <p>Last Modified: {lastModifiedDate}</p>  // Last Modified field
        </footer>
    );
};
export default Footer;
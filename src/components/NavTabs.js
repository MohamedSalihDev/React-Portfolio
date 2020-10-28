import React from "react"
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./index.html">Mohamed Salih</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./index.html">About Me</a> */}
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./contact.html">Contact</a> */}
                        <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                            Contact
        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./portfolio.html">Portfolio</a> */}
                        <Link to="/Portfolio" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Portfolio
        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavTabs;
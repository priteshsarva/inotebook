import React from 'react'
import CircleUser from './svg/CircleUser'
import {
    Link,
    useLocation
} from "react-router-dom";
import AddCards from './AddCards';

const Navbar = () => {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-glass" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Notes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/add" ? "active" : ""}`} aria-current="page" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ADD</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About Us</Link>

                            </li>
                        </ul>
                        <CircleUser color={"white"} width={"1.5em"}/> 
                    </div>
                </div>
            </nav>

            <AddCards /> 

        </>
    )
}

export default Navbar

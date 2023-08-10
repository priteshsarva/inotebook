import React, { useRef, useState } from 'react'
import CircleUser from './svg/CircleUser'
import {
    Link,
    useLocation
} from "react-router-dom";
import AddCards from './AddCards';
import Login from './Login';


const Navbar = () => {

    const [header, setheader] = useState()
    let location = useLocation();
    const launch = useRef(null)

    React.useEffect(() => {
    }, [location]);

    const login = () => {
        setheader('Login')
        launch.current.click()
    }
    const signup = () => {
        setheader('Signup')
        launch.current.click()
    }
    const logout = () => {
        localStorage.removeItem('token')
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-glass" data-bs-theme="dark" style={{zIndex:99}}>
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

                        <div className="btn-group  navbar-nav">

                            <div type="button" className="nav-item dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <div type="button" className="btn nav-link"> <CircleUser fill={"white"} width={"1.5em"} marginRight={"0.25em"} /> Action</div>
                            </div>

                            <ul className="dropdown-menu dropdown-menu-end navbar-glasss">
                                <li><div className="dropdown-item" onClick={login}>Login</div></li>
                                <li><div className="dropdown-item" onClick={signup}>signup</div></li>
                                <li><div className="dropdown-item" onClick={logout}>Logout</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <AddCards />
            <div className="dropdown-item" aria-current="page" data-bs-toggle="modal" data-bs-target="#login" ref={launch} style={{ display: "none" }} />
            <Login head={header} />
        </>
    )
}

export default Navbar

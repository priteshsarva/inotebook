import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../context/auth/AuthContext'

const Login = (props) => {

    const context = useContext(AuthContext)
    const { createUser, loginUser } = context



    const [details, setdetails] = useState(props.head)

    const [data, setdata] = useState({ "name": "", "email": "", "password": "" })

    const close = useRef(null)


    useEffect(() => {
        setdetails(props.head)
    }, [props])

    const onChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (details === "Login") {
            loginUser(data)
            document.getElementById('email').value = ""
            document.getElementById('password').value = ""
            close.current.click()
        } else if (details === "Signup") {
            console.log("HEad");
            createUser(data)
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('password').value = ""
            close.current.click()
        }
        console.log("onSubmit");
    }


    const remoValue = () => {
        if (details === "Signup") {
            document.getElementById('name').value = ""
        }
        document.getElementById('email').value = ""
        document.getElementById('password').value = ""
    }


    return (
        <>


            <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                <form onSubmit={onSubmit} >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content card-glass">

                            <div className="modal-header card-header card-header-glass" data-bs-theme="dark" style={{ justifyContent: 'center' }}>
                                <h5 className="user-select-auto card-title text-light">{details}</h5>
                            </div>
                            <div className="modal-body  mt-4  mb-5">
                                {
                                    details === "Signup" ?
                                        <div className="mb-3" >
                                            <label htmlFor="exampleInputEmail1 " className="form-label card-title text-light" >Name</label>
                                            <input type="text" className="form-control  input-field" required minLength={3} value={data.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                                        </div> : ""
                                }

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1 " className="form-label card-title text-light  ">Email address</label>
                                    <input type="email" className="form-control  input-field " required value={data.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text card-title text-light" >We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1 " className="form-label card-title text-light">Password</label>
                                    <input type="password" name="password" className="form-control input-field" required id="password" value={data.password} onChange={onChange} />
                                </div>
                                <div className="mb-3" >
                                    <label htmlFor="exampleInputPassword1 " className="form-label card-title text-light" onClick={() => { setdetails("Login") }} style={{ display: details === "Signup" ? "" : "none" }}>Alredy Have an Account?</label>
                                    <label htmlFor="exampleInputPassword1 " className="form-label card-title text-light" onClick={() => { setdetails("Signup") }} style={{ display: details === "Login" ? "" : "none" }}>Create an Account</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className='d-flex justify-content-evenly' style={{ width: '100%' }}>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={close} onClick={remoValue}>Close</button>
                                    {
                                        details === "Login" ?
                                            <button type="submit" className="btn btn-primary" >Login</button> : ""
                                    }
                                    {
                                        details === "Signup" ?
                                            <button type="submit" className="btn btn-primary" >Create Account</button> : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Login
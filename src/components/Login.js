import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/auth/AuthContext'

const Login = (props) => {

    const context = useContext(AuthContext)
    const { createUser, loginUser } = context

   

    const [details, setdetails] = useState(props.head)
    const [disp, setdisp] = useState()
    const [dispLogin, setdispLogin] = useState()
    const [data, setdata] = useState({ "name": "", "email": "", "password": "" })
   



    useEffect(() => {
        setdetails(props.head)
        if (props.head === "Login") {
            setdisp("none")
            setdispLogin("block")
        }
        if (props.head === "Signup") {
            setdisp("block")
            setdispLogin("none")
        }
    }, [props])

    const onChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (props.head === "Login") {
            loginUser(data)
        } else if (props.head === "Signup") {
            createUser(data)
        }
        console.log("onSubmit");
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
                                        <div class="mb-3" >
                                            <label for="exampleInputEmail1 " class="form-label card-title text-light" >Name</label>
                                            <input type="text" class="form-control  input-field" required minLength={3} value={data.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                                        </div> : ""
                                }

                                <div class="mb-3">
                                    <label for="exampleInputEmail1 " class="form-label card-title text-light  ">Email address</label>
                                    <input type="email" class="form-control  input-field " required value={data.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text card-title text-light" >We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1 " class="form-label card-title text-light">Password</label>
                                    <input type="password" name="password" class="form-control input-field" required id="exampleInputPassword1" value={data.password} onChange={onChange} />
                                </div>
                                {/* <div class="mb-3 form-check card-title text-light " style={{ display: dispLogin }}>
                                    <input type="checkbox" class="form-check-input" id="RemeberCheck" name="RemeberCheck" />
                                    <label class="form-check-label" for="exampleCheck1 ">Remeber me</label>
                                </div> */}
                            </div>
                            <div className="modal-footer">
                                <div className='d-flex justify-content-evenly' style={{ width: '100%' }}>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {
                                        details === "Login" ?
                                            <button type="submit" class="btn btn-primary" style={{ display: dispLogin }}>Login</button> : ""
                                    }
                                    {
                                        details === "Signup" ?
                                            <button type="submit" class="btn btn-primary" style={{ display: disp }} >Create Account</button> : ""
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
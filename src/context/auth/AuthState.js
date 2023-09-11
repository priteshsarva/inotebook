import React, { useContext } from 'react'
import AuthContext from './AuthContext'
import NoteContext from '../notes/NotesContext';


const AuthState = (props) => {

    const context1 = useContext(NoteContext)
    const { getAllNotes } = context1;


    const url = "http://localhost:5000"

    const createUser = async (data) => {
        console.log("createUser");
        const response = await fetch(`${url}/api/user/auth/createUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": data.name,
                "email": data.email,
                "password": data.password
            }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem("token", json.authToken);
            getAllNotes(json.authToken);
        } else {
            alert(json.Error)
        }
    }

    const loginUser = async (data) => {
        // console.log(data);
        const response = await fetch(`${url}/api/user/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                "email": data.email,
                "password": data.password
            }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            getAllNotes(json.authToken);
            await getUserDetails()
        } else {
            alert(json.Error)
        }
    }

    const getUserDetails = async (data) => {
        // console.log(data);
        const response = await fetch(`${url}/api/user/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("name", json.user.name);
        } else {
            alert(json.Error)
        }
    }

    return (
        <AuthContext.Provider value={{ createUser, loginUser, getUserDetails }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
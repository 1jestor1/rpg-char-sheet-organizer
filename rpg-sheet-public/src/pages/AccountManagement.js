import React from "react";
import axios from "axios";
import {Navigate} from "react-router";


const accounturi ='http://localhost:8080/account/'

export function SendLogin(){
    const [status, setStatus] = React.useState(null);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginRequest();
    };

    function loginRequest() {
        axios.post(accounturi+"login", {
            username:username,
            password:password
        }, {headers: {'Content-Type': 'application/json'},withCredentials:true})
        .then((response) => {
            setStatus(response.data);
            console.log(response.data);
        });
    }
    if(status==='GOOD LOGIN') return <Navigate to="/"/>
    return (
        <div>
            <p id="status">{status}</p>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor="username">username: </label>
                    <input id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <label htmlFor="password">password: </label>
                    <input id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    )

}

export function CreateAccount(){
    const [status, setStatus] = React.useState(null);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setConfirmpassword]=React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password===confirmpassword){
            createRequest();
        }else{
            setStatus("PASSWORDS DO NOT MATCH");
        }
    };
    
    function createRequest() {
        axios.post(accounturi+"create", {
            username:username,
            password:password
        }, {headers: {'Content-Type': 'application/json'},withCredentials:true})
        .then((response) => {
            setStatus(response.data);
            console.log(response.data);
        });}

    if(status==="ACCOUNT CREATED") return <Navigate to="/"/>

    return (
        <div>
            <p id="status">{status}</p>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor="username">username: </label>
                    <input id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <label htmlFor="password">password: </label>
                    <input id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <label htmlFor="confirmpassword">confirm password:</label>
                    <input id="confirmpassword" name="confirmpassword" onChange={(e)=> setConfirmpassword(e.target.value)}/> 
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );

    }


export function CheckSession(){
    const [status,setStatus]=React.useState(null);
    React.useEffect(()=>{
        axios.get(accounturi+'checksession',{withCredentials:true})
        .then((response)=>{
           setStatus(response.data);
           console.log(response.data) 
        });
    },[]);
    return(
        <div>
            <p>{status}</p>
        </div>
    );
}

import React from "react";
import axios from "axios";
import { Nav } from "../components/nav";


const loginuri ='http://localhost:8080/account/login'

export function SendLogin(){
    const [post, setPost] = React.useState(null);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(username, password);
    };

    function createPost() {
        axios.post(loginuri, {
            username:username,
            password:password
        }, {headers: {'Content-Type': 'application/json'},withCredentials:true})
        .then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }
    if(post==null){
    return (
        <div>
            <Nav/>
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
    );}
    if(post=='good-login'){
        return (
        <div>
            <Nav/>
            {post}
        </div>);
    }
    return (
        <div>
            <Nav/>
            {post}
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

export function CheckSession(){
    const [post,setPost]=React.useState(null);
    React.useEffect(()=>{
        axios.get('http://localhost:8080/account/checkSession',{withCredentials:true})
        .then((response)=>{
           setPost(response.data);
           console.log(response.data) 
        });
    },[]);
    return(
        <div>
            <p>Can't even anymore</p>
        </div>
    );
}

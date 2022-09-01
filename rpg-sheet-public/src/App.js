import './App.css';
import React from 'react';
import {Nav} from './components/nav'
import {CreateAccount,SendLogin,CheckSession} from './pages/AccountManagement'

class CharSheet{
  constructor(name,url){
    this.name=name;
    this.url=url;
  }
}

export function Section(props) {

  const [showInfo, setShowInfo] = React.useState(false);

  function toggleInfo(){
    setShowInfo(!showInfo);
  }

  if(!showInfo){
    return (
      <div id={props.sectionId} className="section">
        <h2>{props.name}</h2>
        <img src={props.url} alt="" height="200px" width="200px"/>
        <button onClick={toggleInfo} type="button">{props.buttonText}</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Additional info!</p>
      </div>
    );
  }
}

function View() {
  let sheets = [];
  let sections = [];


  sheets.push(new CharSheet('McKewl', 'https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=20&m=523761634&s=612x612&w=0&h=fycQb31QlRoNLdJWWddooJ94a-54YLYQ3ggTLPkhvmk='));
  sheets.push(new CharSheet('Birb', 'https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'));
  
 
  function renderSection(sectionId, name, url) {
    return (
      <Section
        sectionId={sectionId}
        name={name}
        url={url}
        buttonText={"Find out more about " + name + "s"}/>
    );
  }

  for(let a of sheets){
    sections.push(renderSection(a.sectionId, a.name, a.url));
  }

  return(
    <div className="container">
      {sections}
    </div>
  );
}

export function Site(){
  return(
    <div>
      <Nav/>
      <div id="content">
        <View/>
      </div>
    </div>
  );
}

export function CreateAccountScreen(){
  return(
    <div>
      <Nav/>
      <div id="content">
        <h2>Account Creation</h2>
        <p>Please create an account.</p>
        <CreateAccount/>
      </div>
    </div>
  )
}

export function LoginAccountScreen(){
  return(
    <div>
      <Nav/>
      <div id="content">
        <h2>Account Login</h2>
        <p>Please login to your account.</p>
        <SendLogin/>
      </div>
    </div>)
}

export function TestScreen(){
  return(
    <div>
      <Nav/>
      <div id="content">
        <h2>Current Test: JSession</h2>
        <CheckSession/>
      </div>
    </div>)
}

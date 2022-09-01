import * as React from 'react';
import {useNavigate} from 'react-router-dom';


export function Nav(){
    const navigate=useNavigate();
    return(
        <div>
            <h1 onClick={()=>{navigate('/')}}>RPG Sheet Manager</h1>
            <nav>
                <ul className="navBar-nav">
                    <li className='nav-item'>
                        <p onClick={()=>{navigate('/gate')}}>Login</p>
                    </li>
                    <li className='nav-item'>
                        <p onClick={()=>{navigate('/gate/create')}}>Create Account</p>
                    </li>
                    <li className='nav-item'>
                        <p onClick={()=>{navigate('/test')}}>Test</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
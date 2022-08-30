import * as React from 'react';
import {Link} from 'react-router-dom';

export function Nav(){
    return(
        <nav>
            <Link to="/">Sheet Manager</Link>
            <ul className="navBar-nav">
                <li className='nav-item'>
                    <Link to="/gate">Log In</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/gate/create">Create Account</Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/CheckSession">Check Session</Link>
                </li>
            </ul>
        </nav>
    )
}
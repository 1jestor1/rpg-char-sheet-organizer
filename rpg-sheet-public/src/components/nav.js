import * as React from 'react';
import {Link} from 'react-router-dom';

export function Nav(props){
    return(
        <div>
            <h1>RPG Sheet Manager</h1>
            <nav>
                <Link to="/">Sheet Manager</Link>
                <ul className="navBar-nav">
                    <li className='nav-item'>
                        <Link to="/gate">Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/gate/create">Create Account</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/test">Test</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
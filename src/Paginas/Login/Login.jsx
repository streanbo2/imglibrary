import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {

    return (
        <div>
            <h1>Estamos em login</h1>
            <Link to="/Interface">
                <button>
                    ENTRAR
                </button>
            </Link> 
        </div>
    );
}

export default Login;
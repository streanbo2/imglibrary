import React from 'react'
import { Link } from 'react-router-dom'

export default function Interface() {
    return(
        <div>
        <h1>Estamos em Interface</h1>
        <Link to="/">
                <button>
                    SAIR
                </button>
            </Link> 
        </div>
    );
}
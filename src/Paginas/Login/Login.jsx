import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {

    return (
        <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <img className='icone' src="/src/imagens/logo.png" alt="icon name"></img>
                    <h3>CADASTRAR</h3>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Usuário" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Senha" />
                    </div>
                    <div class="form-group">

                        <button className='btnAct'>
                            CADASTRAR
                        </button>
                    </div>

                </div>
                <div class="col-md-6 login-form-2">
                    <img className='icone' src="/src/imagens/logo.png" alt="icon name"></img>
                    <h3>FAÇA LOGIN</h3>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Senha" />
                    </div>
                    <div class="form-group">

                        <Link to="/Interface">

                            <button className='btnAct'>
                                ENTRAR
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
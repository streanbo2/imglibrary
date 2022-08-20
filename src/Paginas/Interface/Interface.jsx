import React from 'react'
import { Link } from 'react-router-dom'
import './Interface.css'
import UploadButtons from './UploadButtons';

export default function Interface() {
    return (
        <div className='geral'>
            <div className='header'>
                <div class="flex-box container-box">
                    <div class="content-box">Menu de Imagens</div>
                </div>
            </div>
            <div className='galeria'>
                <div className='bloco1'>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>

                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                </div>
                <div className='bloco1'>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>

                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                    <div className="imagens">
                        <img src="https://picsum.photos/200" />
                        <br />
                        <p class="legend">
                            Nome da imagem
                        </p>
                    </div>
                </div>
            </div>
            <div className='botoes'>
            <Link to="/">
                <button className='b1'>
                    SAIR
                </button>
            </Link>
            <UploadButtons className='b2'/>
            </div>
        </div>
    );
}
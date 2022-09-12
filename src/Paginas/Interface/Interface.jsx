import { useState } from 'react';
import './Interface.css'
import Header from './Componentes/Header';
import Button from "./Button";
import Footer from './Componentes/Footer';

function App() {
  

  const icones = [
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },
    {
      link: "https://picsum.photos/200",
      nome: "Nome da Imagem",
    },


  ]

  return (

    <div className='Geral'>

      <Header />

      <div className="Icones">
        {icones.map((icone) => {
          return <Button link={icone.link} nome={icone.nome} />
        })}
      </div>

      <Footer />

    </div>
  );
}
export default App
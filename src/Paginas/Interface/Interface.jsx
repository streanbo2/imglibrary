import { useState } from 'react';
import './Interface.css'
import UploadButton from './UploadButtons';
import Header from './Componentes/Header';
import Button from "./Button";

function App() {
  const [selecionado, setSelecionado] = useState(false);

  function mudaIcones() {
    setSelecionado(!selecionado);
    console.log(selecionado);
  }

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


  ]

  return (

    <div>
      
      <Header/>

      <div className="Icones">
        {icones.map((icone) => {
          return <Button link={icone.link} nome={icone.nome} />
        })}
      </div>

        <UploadButton/>
    </div>
  );
}
export default App
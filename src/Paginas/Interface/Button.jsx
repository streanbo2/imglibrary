function Button({link, nome}){
    return(
        <button className='apps'>
              <img src={link} alt={nome} />
              <p className='nome' color="background-color: rgb(241, 179, 223);">{nome}</p>
        </button>
    );
}

export default Button;
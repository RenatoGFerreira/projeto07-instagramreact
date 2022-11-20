import React, {useState} from  "react"

export default function Usuario(props) {

    const[changeName, setChangeName] = useState(props.username)
    const[changeImage, setChangeImage] = useState(props.profileimg)

    
    function mudaNome(){
        const mudaNomeUsuario = prompt('Escolha o novo nome de usuário:')
        if(mudaNomeUsuario === "" || mudaNomeUsuario === undefined){
            alert('Nome não alterado.')
        }else{
            setChangeName(mudaNomeUsuario)
        }
    }

    function mudaImagem(){
        const mudaImagemUsuario = prompt('Insira o link da nova foto do usuário:')
        if(mudaImagemUsuario === "" || mudaImagemUsuario === undefined){
            alert('Imagem do usuário não alterada.')
        }else{
            setChangeImage(mudaImagemUsuario)
        }
    }
    

    return (
        <div class="usuario" data-test="user">
            <img onClick={mudaImagem} src={changeImage} alt="criado para ter alt" data-test="profile-image"/>
            <div class="texto">
                <strong>{props.profilename}</strong>
                <span data-test="name">
                    {changeName}
                    <ion-icon onClick={mudaNome} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}
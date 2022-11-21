import { useState } from "react"

export default function Posts() {

    const postsItens = [
        {
            imageUser: "assets/img/meowed.svg",
            nameUser: "meowed",
            contentImage: "assets/img/gato-telefone.svg",
            likeByImage: "assets/img/respondeai.svg",
            likeByUser: "respondeai",
            totLiked: 101523,
            foiSalvo: false,
            foiCurtido: false
        },
        {
            imageUser: "assets/img/barked.svg" ,
            nameUser: "barked",
            contentImage: "assets/img/dog.svg",
            likeByImage: "assets/img/adorable_animals.svg",
            likeByUser: "adorable_animals",
            totLiked: 99159,
            foiSalvo: false,
            foiCurtido: false
        }
    ]


    return (
        <>
            {postsItens.map((item) => (
            <Post
                imageUser= {item.imageUser}
                nameUser= {item.nameUser}
                contentImage= {item.contentImage}
                likeByImage= {item.likeByImage}
                likeByUser= {item.likeByUser}
                totLiked= {item.totLiked}
                foiSalvo = {item.foiSalvo}
                foiCurtido = {item.foiCurtido}
            />
            ))}
        </>
    )
}


function Post(props) {

    const [estaSalvo, setEstaSalvo] = useState(props.foiSalvo)
    const [estaCurtido, setEstaCurtido] = useState(props.foiCurtido)
    const [totalCurtidas, setTotalCurtidas] = useState(props.totLiked)
    const [segundoClique, setSegundoClique] = useState(false)


    function salvaPost(){
        setEstaSalvo(!estaSalvo)
    }

    function curtePost(){
        if(!estaCurtido){
            setTotalCurtidas(totalCurtidas + 1)
        }else{
            setTotalCurtidas(totalCurtidas - 1)
        }

        setEstaCurtido(!estaCurtido)
        
    }

    function curtirImagem(){
        setSegundoClique(true)
        setInterval(200, setSegundoClique(!segundoClique))
        if(segundoClique){
            if(!estaCurtido){
                setEstaCurtido(true)
                setTotalCurtidas(totalCurtidas + 1)
            }
        }
    }

    return (
        <>
            <div class="post" data-test="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imageUser} alt={props.nameUser}/>
                        {props.nameUser}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img onClick={curtirImagem}src={props.contentImage} alt={props.nameUser} data-test="post-image"/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            {estaCurtido? (
                                <ion-icon onClick={curtePost} class="icon-red" name="heart" data-test="like-post"></ion-icon>
                            ) : (
                                <ion-icon onClick={curtePost}  name="heart-outline" data-test="like-post"></ion-icon>
                            )}

                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>

                        </div>
                        <div>
                            {estaSalvo? (
                            <ion-icon onClick={salvaPost} name="bookmark" data-test="save-post"></ion-icon>
                            ) : (
                            <ion-icon onClick={salvaPost} class="icon-black" name="bookmark-outline" data-test="save-post"></ion-icon>
                            )}
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.likeByImage} alt={props.likeByUser}/>
                        <div class="texto">
                            Curtido por <strong>{props.likeByUser}</strong> e <strong data-test="likes-number">outras {totalCurtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
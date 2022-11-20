export default function Stories() {

    const storiesItens = [
        { imagem: "assets/img/9gag.svg", usuario: "9gag" },
        { imagem: "assets/img/meowed.svg", usuario: "meowed" },
        { imagem: "assets/img/barked.svg", usuario: "barked" },
        { imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "assets/img/respondeai.svg", usuario: "respondeai" },
        { imagem: "assets/img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
    ]

    return (
        <>
        {storiesItens.map((item) => <Story imagem={item.imagem} usuario={item.usuario} />)}
        </>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt={props.usuario} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>

    )
}
import { Titulo } from "../Titulo"
import styled from "styled-components"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 20px auto;
    max-width: 600px;
    padding: 10px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = styled.button`
    background-color: #ffb914;
    color: #FFF;
    padding: 10px 0px;
    margin-left: 4px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 143px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #2c9fa3;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`

const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#ff8826" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>  
    )
}

export default CardRecomenda
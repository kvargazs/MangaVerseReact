import Input from '../Input'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getLivros from '../../servicos/livros';
import { postFavorito } from '../../servicos/favoritos';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(160deg, #124042 0%, #2c9fa3 100%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livros, setLivros] = useState([])
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

async function fetchLivros() { //fazendo uma função assincrona
    const livrosDaAPI = await getLivros() //await significa que a função vai funcionar em tempos diferentes
    setLivros(livrosDaAPI)
}

async function insertFavorito(id) {
    await postFavorito(id)
    alert("Livro inserido em favoritos!")
}

    return (
        <PesquisaContainer>
            <Titulo>Explore o universo dos mangás!</Titulo>
            <Subtitulo>Encontre as últimas novidades e os clássicos imperdíveis e mergulhe em histórias incríveis.</Subtitulo>
            <Input placeholder="Qual será sua próxima leitura?" onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa
import styled from 'styled-components' //importando o styled-components

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'] //criando um array para as opcoes

function OpcoesHeader() {
    return(
        <Opcoes>
            {/*usando um método array (map) para não ficar repetindo código das opcoes*/}
            { textoOpcoes.map( (texto) => (<Opcao><p>{texto}</p></Opcao>) ) }
        </Opcoes>
    )
}

export default OpcoesHeader
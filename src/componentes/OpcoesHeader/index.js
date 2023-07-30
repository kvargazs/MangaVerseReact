import styled from 'styled-components' //importando o styled-components
import { Link } from 'react-router-dom'

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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'] //criando um array para as opcoes

function OpcoesHeader() {
    return(
        <Opcoes>
            {/*usando um método array (map) para não ficar repetindo código das opcoes*/}
            { textoOpcoes.map( (texto) => (<Link to={`/${texto.toLocaleLowerCase}`}><Opcao><p>{texto}</p></Opcao></Link> ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader
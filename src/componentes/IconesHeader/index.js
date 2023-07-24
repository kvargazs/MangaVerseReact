import usuario from '../../imagens/Usuario.svg' //importando o icone do usuario
import sacola from '../../imagens/Sacola.svg' //importando o icone da sacola
import styled from 'styled-components' //importando o styled-components

//criando uma const do icone para estilizar com styled-components
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

//criando uma const dos icones para estilizar com styled-components
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [usuario, sacola] //criando um array para os icones

//função dos icones da header
function OpcoesHeader() {
    return(
        <Icones> {/*substituindo a ul pela estilização*/}
            {/*usando um método array (map) para não ficar repetindo código dos icones*/}
            { icones.map( (icone) => (<Icone><img src={icone}></img></Icone>) ) }
        </Icones>
    )
}

export default OpcoesHeader //exportando os iconesHeader
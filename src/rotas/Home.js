import styled from 'styled-components'; //importando o styled-components
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

//criando uma const do principal (App) para estilizar com styled-components
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #124042 0%, #2c9fa3 100%);
`

//Função principal
function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home; //exportando a função app

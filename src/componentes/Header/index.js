import Logo from '../Logo' //importando a função da logo
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';

const HeaderContainer = styled.header`
        background-color: #fff;
        display: flex;
        justify-content: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/> {/*trazendo a logo*/}
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;
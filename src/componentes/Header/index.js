import Logo from '../Logo' //importando a função da logo
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
        background-color: #fff;
        display: flex;
        justify-content: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo/> {/*trazendo a logo*/}
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;
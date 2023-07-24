import logo from '../../imagens/Logo.svg' //Importando a imagem da logo
import styled from 'styled-components' //importando o styled-components

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right 10px;
`

//Função da logo
function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='Logo do Manga Verse'/> {/*Mostrando a logo*/}
            <p><strong>Manga</strong>Verse</p> {/*Colocando um texto com negrito na header*/}
        </LogoContainer>
    )
}

export default Logo; //exportando a logo
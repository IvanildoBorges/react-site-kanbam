import styled from "styled-components";
import ModeScheme from "../../assets/DarkMode";
import { Palheta } from "../../utils/Cores/palheta";

const Nav = styled.nav`
    display: flex;
    place-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    height: 3.5rem;
    background-color: rgba(0, 0, 0, 0.4);

    span {
        font-size: 1rem;
        font-weight: bold;
    }

    button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .mode-scheme {
        transition: all 300ms ease-in;
        fill: #f6f6f6;
    }
    .mode-scheme:hover {
        transition: all 300ms ease-in;
        fill: ${Palheta.rosa};
    }
`;

export default function NavBar() {

    function trocarTema() {
        //
    }

    return (
        <Nav>
            <span>App Kanban</span>
            <button onClick={trocarTema}>
                <ModeScheme classe="mode-scheme" tamanho={32} />
            </button>
        </Nav>
    );
}
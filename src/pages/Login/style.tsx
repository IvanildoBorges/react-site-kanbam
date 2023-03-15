import styled from "styled-components";
import Cores from "../../styles/cores/cores";

export const Container = styled.div`
    &.container-login {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        min-height: 100vh;
        height: 100%;
    }

    #container-content {
		display: flex;
        align-items: center;
		justify-content: space-around;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		transition: all 500ms ease-in;
        background-color: ${Cores.roxo};

		.container-icon {
			fill-opacity: 0.8;
		}
	}

    @media screen and (max-width: 767px) {
        &.container-login {
            grid-template-columns: 1fr;
        }
        #container-content {
            display: none;
        }
    }
`;
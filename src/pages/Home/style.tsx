import styled, { css, keyframes } from "styled-components";
import Cores from "../../styles/cores/cores";

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Container = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
    height: 100%;
	min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(-45deg, ${Cores.rosa}, ${Cores.roxo}, ${Cores.azul});
    background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
`;

export const Box = styled.div`
	&#page {
		display: grid;
		grid-template-areas: 
			'title title'
			'texto texto'
			'signup signin'
		;
		padding: 10px;
		grid-template-rows: 0.1fr 0.1fr 1fr;
		width: 40vw;
		
		min-width: 300px;
		color: ${Cores.branco};
		background-color: ${Cores.branco};
		border-radius: 1rem;
		text-align: center;
		overflow: hidden;
		transition: all 300ms ease-in;
	}

	.title {
		grid-area: title;
		font-size: 2rem;
		font-weight: 600;
		color: ${Cores.preto};
		margin: 0.5rem;
	}
	.text {
		grid-area: texto;
		color: ${Cores.preto};
		margin: 0rem 0rem 2rem;
	}
	.btn {
		text-align: center;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: 600;
		transition: all 250ms ease-in;
		padding: 1rem;
		
		&:hover {
			color: ${Cores.branco};
			background-color: ${Cores.rosa};
		}
	}
	.signup {
		grid-area: signup;
		margin-right: 0.5rem;
		color: ${Cores.branco};
		background-color: ${Cores.roxo};
	}
	.signin {
		grid-area: signin;
		margin-left: 0.5rem;
		color: ${Cores.roxo};
		border: 1px solid ${Cores.roxo};
	}

	@media screen and (min-width: 511px) and (max-width: 1440px) {
		&#page {
			width: 80vw;
			min-width: 280px;
			border-radius: 0.5rem;
		}
		.title {
			font-size: 1.75rem;
			margin: 0.5rem;
		}
		.text {
			margin: 0rem 0rem 1.5rem;
		}
		.btn {
			padding: 0.5rem;
		}
	}

	@media screen and (max-width: 511px) {
		&#page {
			grid-template-areas: 
				'title title'
				'texto texto'
				'texto texto'
				'signup signup'
				'signin signin'
			;
			min-width: 250px;
			width: 85%;
			border-radius: 0.5rem;
		}
		
		.title {
			font-size: 1.75rem;
			margin: 0.5rem;
		}
		.text {
			margin: 0rem 0rem 1.5rem;
		}
		.btn {
			padding: 0.5rem 0rem;
		}
		.signup {
			margin-right: 0rem;
			margin-bottom: 1rem;
		}
		.signin {
			margin-left: 0rem;
		}
	}
`;
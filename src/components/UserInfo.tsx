import styled from "styled-components"
import { Palheta } from "../utils/Cores/palheta";

type Props = {
    nome: String,
    email: String,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 80%;
    max-width: 800px;
    margin: 2rem 0rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid ${Palheta.branco};
    background-color: ${Palheta.roxo};
    text-align: center;

    .text-bold {
        font-size: 1.25rem;
        font-weight: bold;
    }
    .small {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        margin: 1rem 0rem;

        .text-bold {
            font-size: 1rem;
        }
        .small {
            font-size: 0.8rem;
        }
    }
`;

export default function UserInfo({nome, email}: Props) {
    return (
        <Container className="user-info">
            <p className="text-bold">{nome}</p>
            <p className="text-bold small">Email: {email}</p>
        </Container>
    )
}
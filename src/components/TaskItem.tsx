import { useState } from "react";
import styled from "styled-components"
import Trash from "../assets/Trash";
import Cores from "../styles/cores/cores";

const Input = styled.input`
    &.input {
        border: 1px solid ${Cores.azulEscuro};
        background-color: ${Cores.brancoForte};
        font-size: 14px;
        display: block;
        border-radius: 3px;
        padding: 0.5rem 0.25rem;
        margin-bottom: 0.5rem;
        transition: all 500ms ease-in;
    }
    &.input:hover {
        color: ${Cores.branco};
        background-color: ${Cores.roxo};
        border: 1px solid transparent;
        font-weight: bolder;
        cursor: pointer;
    }
    &.input:focus {
        outline: none;
        color: ${Cores.preto};
        background-color: ${Cores.branco};
        font-weight: normal;
        cursor: text;
    }

    @media screen and (max-width: 768px) {
        &.input {
            margin-bottom: 0.5rem;
        }
    }
`;

const Container = styled.div`
    border-radius: 0.5rem;
    border: 1px solid ${Cores.azul};
    background-color: ${Cores.branco};
    color: ${Cores.preto};
    padding: 0.5rem 0.25rem;
    font-size: 14px;
    transition: all 500ms ease-in-out;
`;

const Item = styled.div`
    border-radius: 0.25rem;
    border: 1px solid ${Cores.azul};
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.25rem;
    transition: all 500ms ease-in-out;
    
    &:hover {
        color: ${Cores.branco};
        background-color: ${Cores.roxo};
        border: 1px solid transparent;
        font-weight: bolder;
    }
`;

const Row = styled.div`
    display: flex;
    gap: 0.5rem;

    .lixeira-icon {
        cursor: pointer;
    }
`;

const Select = styled.select`
    display: block;
    width: 100%;
    border-radius: 3px;
    padding: 0.15rem 0.25rem;
    color: ${Cores.branco};
    cursor: pointer;

    &.task-item-pendente {
        background-color: ${Cores.vermelho};
    }
    &.task-item-fazendo {
        background-color: ${Cores.laranja};
    }
    &.task-item-completo {
        background-color: ${Cores.verdeEscuro};
    }

    option {
        height: 48px;
        color: ${Cores.preto};
    }
`;

type Props = {
    id: number
    title: string,
    taskState: string
    onTaskUpdate: (id: number, titulo: string, estado: string) => void
    onDeleteTask: (id: number) => void
}

export default function TaskItem({id, title, taskState, onTaskUpdate, onDeleteTask}: Props) {
    const [editavel, setEditavel] = useState(false);
    const [tituloEditavel, setTituloEditavel] = useState(title);

    const setaClasse = () : string => {
        if (taskState === "Fazendo") {
            return "task-item-fazendo";
        } else if (taskState === "Completo") {
            return "task-item-completo";
        } else {
            return "task-item-pendente";
        }
    }

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        setTituloEditavel(newTitle);
        onTaskUpdate(id, newTitle, taskState)
    }

    const onKeyPress = (event: any) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            setEditavel(false);
            if (tituloEditavel.length === 0) {
                onDeleteTask(id)
            }
        }
    }

    const onTapStateChange = (event: any) => {
        onTaskUpdate(id, title, event.target.value)
    }
    
    return (
        <>
            { editavel
                ? <Input 
                    className="input" 
                    type="text" 
                    value={tituloEditavel} 
                    onChange={onTitleChange} 
                    onKeyDown={onKeyPress}
                    autoFocus={true}
                />
                : <Container>
                    <Item onClick={(e) => setEditavel(true)}>{tituloEditavel}</Item>
                    <Row>
                        <Select className={setaClasse()} onChange={onTapStateChange} value={taskState}>
                            <option style={{background: `${Cores.branco}`}} value="Pendente">Pendente
                            </option>
                            <option style={{background: `${Cores.branco}`}} value="Fazendo">Fazendo
                            </option>
                            <option style={{background: `${Cores.branco}`}} value="Completo">Completo</option>
                        </Select>
                        <Trash 
                            classe="lixeira-icon" 
                            tamanho={24} 
                            corDaTampa={`${Cores.rosa}`} 
                            corDaLata={`${Cores.rosa}`}
                            corDasListras={`${Cores.branco}`}
                            onTapTrash={() => onDeleteTask(id)}
                        />
                    </Row>
                </Container>
            }
        </>
    )
}
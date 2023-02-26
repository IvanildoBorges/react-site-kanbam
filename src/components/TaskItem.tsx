import { useState } from "react";
import styled from "styled-components"
import Trash from "../assets/Trash";
import { Palheta } from "../utils/Cores/palheta";

const Container = styled.div`
    border-radius: 0.5rem;
    border: 1px solid ${Palheta.azulClaro};
    background-color: ${Palheta.branco};
    color: ${Palheta.preto};
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.25rem;
    font-size: 14px;
    transition: all 500ms ease-in-out;
`;

const Item = styled.div`
    border-radius: 0.25rem;
    border: 1px solid ${Palheta.azulClaro};
    cursor: pointer;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.25rem;
    transition: all 500ms ease-in-out;
    
    &:hover {
        color: ${Palheta.branco};
        border: 1px solid transparent;
        background-color: ${Palheta.roxo};
        font-weight: bolder;
    }
`;

const Input = styled.input`
    border: none;
    font-size: 14px;
    display: block;
    width: 100%;
    border-radius: 3px;
    padding: 0.5rem 0.25rem;
    margin-bottom: 0.5rem;
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
    color: ${Palheta.branco};
    cursor: pointer;

    &.task-item-pendente {
        background-color: ${Palheta.vermelho};
    }
    &.task-item-fazendo {
        background-color: ${Palheta.laranja};
    }
    &.task-item-completo {
        background-color: ${Palheta.verde};
    }

    option {
        height: 48px;
        color: ${Palheta.preto};
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
                ? <Input className="input" type="text" value={tituloEditavel} onChange={onTitleChange} onKeyDown={onKeyPress}/>
                : <Container>
                    <Item onClick={(e) => setEditavel(true)}>{tituloEditavel}</Item>
                    <Row>
                        <Select className={setaClasse()} onChange={onTapStateChange} value={taskState}>
                            <option style={{background: `${Palheta.branco}`}} value="Pendente">Pendente</option>
                            <option style={{background: `${Palheta.branco}`}} value="Fazendo">Fazendo</option>
                            <option style={{background: `${Palheta.branco}`}} value="Completo">Completo</option>
                        </Select>
                        <Trash 
                            classe="lixeira-icon" 
                            tamanho={24} 
                            corDaTampa={`${Palheta.rosa}`} 
                            corDaLata={`${Palheta.rosa}`}
                            corDasListras={`${Palheta.branco}`}
                            onTapTrash={() => onDeleteTask(id)}
                        />
                    </Row>
                    
                </Container>
            }
        </>
    )
}
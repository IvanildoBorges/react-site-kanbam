import { useState } from "react";
import styled from "styled-components"
import { Palheta } from "../utils/Cores/palheta";

const Item = styled.div`
    border-radius: 3px;
    border: 1px solid ${Palheta.azulClaro};
    color: ${Palheta.branco};
    cursor: pointer;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.25rem;
    font-size: 14px;
    transition: all 500ms ease-in-out;

    &.task-item-pendente {
        background-color: ${Palheta.vermelho};
    }
    &.task-item-fazendo {
        background-color: ${Palheta.laranja};
    }
    &.task-item-completo {
        background-color: ${Palheta.verde};
    }

    &:hover {
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

const Select = styled.select`
    display: block;
    width: 100%;
    border-radius: 3px;
    padding: 0.15rem 0.25rem;
    margin-top: -0.25rem;
    margin-bottom: 0.5rem;
`;

type Props = {
    id: number
    title: string,
    taskState: string
    onTaskUpdate: (id: number, titulo: string, estado: string) => void
}

export default function TaskItem({id, title, taskState, onTaskUpdate}: Props) {
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
        if (event.key === "Enter") {
            setEditavel(false);
        }
    }

    const onTapStateChange = (event: any) => {
        onTaskUpdate(id, title, event.target.value)
    }
    
    return (
        <>
            { editavel
                ? <Input type="text" value={tituloEditavel} onChange={onTitleChange} onKeyDown={onKeyPress}/>
                : <>
                    <Item className={setaClasse()} onClick={(e) => setEditavel(true)}>
                            {tituloEditavel}
                        </Item>
                    <Select onChange={onTapStateChange} value={taskState}>
                        <option value="Pendente">Pendente</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Completo">Completo</option>
                    </Select>
                </>
            }
        </>
    )
}
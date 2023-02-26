import { useState } from "react";
import styled from "styled-components"
import { Palheta } from "../utils/Cores/palheta";

const Item = styled.div`
    &.task-item {
        background-color: ${Palheta.azul};
        color: ${Palheta.branco};
        border-radius: 3px;
        border: 1px solid ${Palheta.azulClaro};
        cursor: pointer;
        margin-bottom: 0.5rem;
        width: 100%;
        padding: 0.5rem 0.25rem;
        font-size: 14px;
        transition: all 500ms ease-in-out;
    }

    &.task-item:hover {
        border: 1px solid transparent;
        background-color: ${Palheta.secundaria};
        color: ${Palheta.branco};
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
                    <Item className="task-item" onClick={(e) => setEditavel(true)}>{tituloEditavel}</Item>
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
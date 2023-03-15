import styled from "styled-components";
import Cores from "../styles/cores/cores";
import { Task } from "../schemas/task.schema";
import TaskItem from "./TaskItem";

const BoxTaskList = styled.div`
    padding: 0.5rem;
    background-color: ${Cores.azul};
    border-radius: 0.25rem;
`;

const BoxTitulo = styled.div`
    padding: 0.25rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.25);
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;
    gap: 0.5rem;

    .empty-list {
        text-align: center;
        border: 2px dashed ${Cores.branco};
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    @media screen and (max-width: 768px) {
        & {
            margin: 0.75rem 0;
        }
    }
`;

const Botao = styled.button`
    width: 100%;
    height: 2.2rem;
    color: ${Cores.preto};
    background-color: ${Cores.branco};
    font-weight: bold;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: all 350ms ease-in;

    &:hover {
        color: ${Cores.branco};
        background-color: ${Cores.rosa};
    }
`;

type Props = {
    titulo: string,
    lista: Task[],
    taskState: string,
    onAddTask: (titulo: string, estado: string) => void,
    onTaskUpdate: (id: number, titulo: string, estado: string) => void,
    onDeleteTask: (id: number) => void
}

export default function TaskList({ titulo, lista, taskState, onAddTask, onTaskUpdate, onDeleteTask }: Props) {
    const adicionarTarefa = () => {
        onAddTask("Nova Tarefa", taskState);
    }
    return (
        <BoxTaskList>
            <BoxTitulo>{titulo}</BoxTitulo>
            <Content>
                {
                    lista.map((tarefa) => {
                        return (
                            <TaskItem 
                                key={tarefa.id}
                                id={tarefa.id}
                                title={tarefa.title}
                                taskState={tarefa.status}
                                onTaskUpdate={onTaskUpdate}
                                onDeleteTask={onDeleteTask}
                            />
                        )
                    })
                }
                {lista.length === 0 
                    && <div className="empty-list">Lista vazia</div>
                }
            </Content>
            <Botao onClick={adicionarTarefa}>Adicionar Tarefa</Botao>
        </BoxTaskList>
    )
}
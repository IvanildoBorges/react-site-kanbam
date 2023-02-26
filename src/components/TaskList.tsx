import styled from "styled-components";
import { Palheta } from "../utils/Cores/palheta";
import PropTypes, { InferProps } from 'prop-types';
import { Task } from "../model/Task";
import TaskItem from "./TaskItem";

const BoxTaskList = styled.div`
    padding: 0.5rem;
    background-color: ${Palheta.azul};
    border-radius: 2px;
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
    padding: 1rem 0.25rem;

    .empty-list {
        text-align: center;
        border: 2px dashed ${Palheta.branco};
        border-radius: 0.25rem;
        padding: 0.25rem;
    }
`;

const Botao = styled.button`
    width: 100%;
    height: 2.2rem;
    color: ${Palheta.preto};
    background-color: ${Palheta.branco};
    font-weight: bold;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: all 350ms ease-in;

    &:hover {
        color: ${Palheta.branco};
        background-color: ${Palheta.rosa};
    }
`;

//Como verificar e validar tipos de dados recebidos pelo objeto props do componente?
//Podemos fazer usando a biblioteca PropTypes ou um objeto feito com a palavra reservada type do typescript

//usando type (forma indicada):
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

//usando PropTypes:
/*export default function TaskList({ titulo }: Props) {
    return (
        <BoxTaskList>
            <BoxTitulo>{titulo}</BoxTitulo>
            <Content></Content>
        </BoxTaskList>
    )
}*/

//Proptypes é escopoe, ou seja, usado para modificar o componente e os tipos que ele recebe
/*TaskList.propTypes = {
    titulo: PropTypes.string,
}*/

//No prop-typespacote, todos os adereços são opcionais por padrão. Para tornar um prop 
//necessário, você terá que usar explicitamente .isRequired
//ex: FavoriteColor.propTypes = { cor: PropTypes.string.isRequired }
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/layout/NavBar';
import TaskList from './components/TaskList';
import UserInfo from './components/UserInfo';
import { modelTask, Task } from './model/Task';
import { modelUser, User } from './model/User';
import api from './services/api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.App {
    height: 100%;
    min-height: 100vh;
  }
`;

const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: 100%;
    max-width: 800px;
    padding: 0.5rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;

let idAccumulado: number = 0;

function App() {
  const [lisTasks, setListTasks] = useState(modelTask);
  const [listUsers, setListUsers] = useState(modelUser);
  
  //função para gerar novo id
  const generateId = () : number => {
    idAccumulado += 1;
    return idAccumulado;
  }

  //função para criar nova task
  const addTask = (title: string, status: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      status
    }

    //nesse useState estamos usando um callback para ter acesso ao valor anterior da função,
    // por exemplo, se quiser fazer uma alteração no valor que era anterior ao valor presente
    // é usado o callback pra isso. Aqui está sendo adicionado um novo estado ao state
    setListTasks((existingTask) => {
      //... é operador de desestruturação para arrancar os valores do array recebido por 
      // paramentro para o novo array
      return [...existingTask, newTask]
    });
  }

  const updateTask = (id: number, title: string, status: string) => {
    setListTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {...task, title, status}  //sobreescreve os atributos pelos paramentros recebidos, menos o id (porque não foi citado ele nesse desestruturação)
        } else {
          return task
        }
      })
    })
  }

  const deleteTask = (id: number) => {
    setListTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id) //deixa na lista somente as tarefas que não forem iguais ao id, do contrário, as remove
    })
  }

  const pegarUsuarios = async () => {
    let listaDeUsuarios = await api.getUsers()
    .then((resposta) => resposta ? resposta.data.users : modelUser)
    .then((user: User[]) => user);

    setListUsers(listaDeUsuarios);
  }

  useEffect(() => {
    pegarUsuarios();
    setListTasks([]);
  }, []);

  return (
    <AppContainer className="App">
      <NavBar />
      <UserInfo nome={listUsers[0].name} email={listUsers[0].email} />
      <TaskContainer>
        <TaskList 
          titulo="Pendente" 
          lista={lisTasks.filter((tarefaItem) => tarefaItem.status === "Pendente")} 
          taskState="Pendente"
          onAddTask={addTask} 
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
        />
        <TaskList 
          titulo="Fazendo" 
          lista={lisTasks.filter((tarefaItem) => tarefaItem.status === "Fazendo")}
          taskState="Fazendo"
          onAddTask={addTask} 
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
        />
        <TaskList 
          titulo="Completo" 
          lista={lisTasks.filter((tarefaItem) => tarefaItem.status === "Completo")}
          taskState="Completo"
          onAddTask={addTask} 
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
        />
      </TaskContainer>
    </AppContainer>
  )
}

export default App

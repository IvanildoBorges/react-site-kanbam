import { useEffect, useState } from 'react';
import TaskList from '../../components/TaskList';
import useAuthStore from '../../context/useAuthStore'
import { modelTask, Task } from '../../schemas/task.schema';
import { Container, TaskContainer } from './style';

let idAccumulado: number = 0;

const Dashboard = () => {
  const { user } = useAuthStore()
  const [lisTasks, setListTasks] = useState(modelTask);
  
  const generateId = () : number => {
    idAccumulado += 1;
    return idAccumulado;
  }

  const addTask = (title: string, status: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      status
    }

    setListTasks((existingTask) => {
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

  useEffect(() => {
    setListTasks([]);
  }, []);

  return (
    <Container className='container-dashboard'>
      <h1 className='dashboard-welcome'>Bem-vindo {user?.name}</h1>
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
    </Container>
  )
}

export default Dashboard
import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
        setTask(event.target.value);
    } else {
        setDeadline(+event.target.value);
    }
  };

  const addTask = (): void => {
      const newTask = { taskName: task, deadline };
      setTodoList([...todoList, newTask]);
      setTask('');
      setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
      setTodoList(todoList.filter((task) => {
          return task.taskName !== taskNameToDelete;
      }));
  }

  return (
      <div className="App">
          <Header task={task} deadline={deadline} handleChange={handleChange} addTask={addTask} />
          <TodoList todoList={todoList} completeTask={completeTask} />
      </div>
  );
}

export default App;

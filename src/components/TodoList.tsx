import React from 'react';
import '../App.css';
import { ITask } from '../interfaces';
import TodoTask from './TodoTask';

interface Props {
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const TodoList = ({ todoList, completeTask }: Props) => {
    return (
        <div className="todoList">
            {todoList.map((task: ITask, key: number) => {
                return (
                    <TodoTask
                        key={key}
                        task={task}
                        completeTask={completeTask}
                    />)
            })}
        </div>
    );
}

export default TodoList;
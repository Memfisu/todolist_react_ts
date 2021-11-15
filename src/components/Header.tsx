import React, { ChangeEvent } from 'react';
import '../App.css';

interface Props {
    task: string;
    deadline: number;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
    addTask(): void;
}

const Header = ({ task, deadline, handleChange, addTask }: Props) => {
    return (
        <div className="header">
            <div className="inputContainer">
                <input
                    type="text"
                    name="task"
                    placeholder="Write something"
                    value={task}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="deadline"
                    placeholder="Deadline"
                    value={deadline}
                    onChange={handleChange}
                />
            </div>
            <button onClick={addTask}>Add task</button>
        </div>
    );
}

export default Header;
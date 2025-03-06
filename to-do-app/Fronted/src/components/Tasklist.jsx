import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;

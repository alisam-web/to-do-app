import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = { title, description };

        axios.post('http://localhost:5000/tasks', newTask)
            .then(() => {
                // Aktualisiere die Aufgabenliste nach dem Hinzufügen
                window.location.reload();
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Beschreibung"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Hinzufügen</button>
        </form>
    );
};

export default AddTask;

// App.js

import React, { useState, useEffect } from 'react';
// En tu index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './AddTaskForm'; // Asegúrate de que la ruta sea correcta

function App() {
  const [tareas, setTareas] = useState([]);

  // Cargar tareas existentes al iniciar
  useEffect(() => {
    fetch('http://localhost:8080/api/tareas')
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  // Función para añadir una nueva tarea
  const addTask = (newTask) => {
    fetch('http://localhost:8080/api/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        // Añadir la nueva tarea al estado para actualizar la UI
        setTareas([...tareas, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm onAdd={addTask} />
      <div className="task-list">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="task">
            <h3>{tarea.titulo}</h3>
            <p>{tarea.descripcion}</p>
            {/* Botones o acciones para editar o eliminar aquí */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


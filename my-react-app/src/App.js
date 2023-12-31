import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Realiza la llamada para obtener todas las tareas al cargar la página
    fetch('http://localhost:8080/api/tareas')
      .then((response) => response.json())
      .then((data) => setTareas(data)); // Establece las tareas en el estado
  }, []); // Dependencia vacía para que se ejecute solo una vez

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.descripcion}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

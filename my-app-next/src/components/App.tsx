// components/App.tsx o donde manejes tu componente padre
import React, { useState } from 'react';
import Home from '@/app/page';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const handleAddTask = (titulo: string, descripcion: string) => {
    const nuevaTarea = { id: Date.now().toString(), titulo, descripcion, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const handleDeleteTask = (id: string) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return <Home tareas={tareas} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;
};

export default App;

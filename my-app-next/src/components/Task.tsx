// components/Task.tsx
import React from 'react';

interface TaskProps {
  task: { id: string; titulo: string; descripcion: string; completada: boolean };
  onDelete: (id: string) => void;
  // Agrega cualquier otra prop necesaria para la edición.
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div>
      <h3>{task.titulo}</h3>
      <p>{task.descripcion}</p>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
      {/* Agrega botones o funcionalidades para editar aquí */}
    </div>
  );
};

export default Task;

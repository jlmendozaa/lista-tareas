// pages/index.tsx
'use client';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí es donde enviarás los datos a tu API para guardarlos en la base de datos
    const response = await fetch('/api/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, descripcion }),
    });

    if (response.ok) {
      console.log('Tarea guardada correctamente');
      // Aquí puedes limpiar el formulario o redirigir al usuario
      setTitulo('');
      setDescripcion('');
    } else {
      console.log('Error al guardar la tarea');
    }
  };

  return (
    <div>
      <h1>Añadir Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar Tarea</button>
      </form>
    </div>
  );
};

export default Home;

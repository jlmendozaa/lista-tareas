// AddTaskForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTaskForm({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      titulo,
      descripcion,
      completada: false,
    };

    onAdd(newTask);

    setTitulo('');
    setDescripcion('');
  };

  return (
    <div className="add-task-form" style={{ maxWidth: '500px', margin: '40px auto' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control 
            type="text" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Añadir Tarea
        </Button>
      </Form>
    </div>
  );
}

export default AddTaskForm;

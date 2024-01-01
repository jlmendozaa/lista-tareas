// pages/api/tareas.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extraer datos del cuerpo de la solicitud
    const { titulo, descripcion } = req.body;

    try {
      // Aquí es donde conectarías con tu base de datos y guardarías la tarea
      // Por ejemplo, usando Mongoose con MongoDB, podrías hacer algo como:
      // await TaskModel.create({ titulo, descripcion });

      // Respuesta de éxito
      res.status(200).json({ message: 'Tarea guardada correctamente' });
    } catch (error) {
      // Manejo de errores de la base de datos
      res.status(500).json({ message: 'Error al guardar la tarea' });
    }
  } else {
    // Método no permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

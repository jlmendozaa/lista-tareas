package com.tuproyecto.listaTareas.models.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tuproyecto.listaTareas.models.domain.Tarea;

@Service
public class TareaService {
    
    private final TareaRepository tareaRepository;

    @Autowired
    public TareaService(TareaRepository tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    public List<Tarea> findAllTareas() {
        return tareaRepository.findAll();
    }

    public Tarea addTarea(Tarea tarea) {
        return tareaRepository.save(tarea);
    }

    public Tarea updateTarea(String id, Tarea tarea) {
        // Asegúrate de manejar los casos donde la tarea con el id dado no existe
        tarea.setId(id);
        return tareaRepository.save(tarea);
    }

    public void deleteTarea(String id) {
        tareaRepository.deleteById(id);
    }
}

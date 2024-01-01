package com.tuproyecto.listaTareas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuproyecto.listaTareas.models.domain.Tarea;
import com.tuproyecto.listaTareas.models.service.TareaRepository;
import com.tuproyecto.listaTareas.models.service.TareaService;

@RestController
@RequestMapping("/api/tareas")
public class TareasController {

	@Autowired
	private TareaService tareaService;

 
    @GetMapping
    public List<Tarea> getAllTareas() {
        return tareaService.findAllTareas();
    }

    @PostMapping
    public Tarea addTarea(@RequestBody Tarea nuevaTarea) {
        return tareaService.addTarea(nuevaTarea);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarea> updateTarea(@PathVariable String id, @RequestBody Tarea tarea) {
        return new ResponseEntity<>(tareaService.updateTarea(id, tarea), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTarea(@PathVariable String id) {
        tareaService.deleteTarea(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
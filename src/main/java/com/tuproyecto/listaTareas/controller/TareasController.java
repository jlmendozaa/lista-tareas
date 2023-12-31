package com.tuproyecto.listaTareas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tuproyecto.listaTareas.models.domain.Tarea;
import com.tuproyecto.listaTareas.models.service.TareaRepository;

@RestController
@RequestMapping("/api/tareas")
public class TareasController {

	@Autowired
	private TareaRepository tareaRepository;

	// Obtener todas las tareas
	@GetMapping
	public List<Tarea> getAllTareas() {
		System.out.println("Empezamos");
		List<Tarea> tareas = tareaRepository.findAll();
		for (Tarea tarea : tareas) {
			System.out.println(tarea.getDescripcion());
		}
		return tareaRepository.findAll();
	}

	// Crear una nueva tarea
	@PostMapping
	public Tarea createTarea(@RequestBody Tarea nuevaTarea) {
		return tareaRepository.save(nuevaTarea);
	}

}
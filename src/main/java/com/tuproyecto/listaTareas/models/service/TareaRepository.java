package com.tuproyecto.listaTareas.models.service;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tuproyecto.listaTareas.models.domain.Tarea;

public interface TareaRepository extends MongoRepository<Tarea, String> {
    // Spring Data deduce las operaciones CRUD de MongoRepository
}

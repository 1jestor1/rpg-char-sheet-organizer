package com.rpgsheets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rpgsheets.models.Sheet;

public interface SheetRepository extends JpaRepository<Sheet, Integer>{
	
	<S extends Sheet> S save(S entity);
	Sheet findById(int id);
}

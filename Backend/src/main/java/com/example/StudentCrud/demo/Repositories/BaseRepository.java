package com.example.StudentCrud.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T, key> extends JpaRepository<T,key> {

}

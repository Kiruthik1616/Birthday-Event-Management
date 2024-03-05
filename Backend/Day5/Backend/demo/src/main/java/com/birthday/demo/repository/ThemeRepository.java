package com.birthday.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.demo.entity.Theme;

import java.util.Optional;

public interface ThemeRepository extends JpaRepository<Theme, Long> {
    Optional<Theme> findByName(String themeName);
}

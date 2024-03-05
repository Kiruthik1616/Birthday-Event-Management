package com.birthday.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.birthday.demo.entity.Addon;

import java.util.Optional;

public interface AddonRepository extends JpaRepository<Addon, Long> {
    Optional<Addon> findByName(String addonName);
}

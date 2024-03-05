package com.birthday.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
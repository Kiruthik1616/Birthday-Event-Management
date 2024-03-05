package com.birthday.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.demo.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}

package com.birthday.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.entity.Admin;



public interface AdminRepository extends JpaRepository<Admin, Long> {

}

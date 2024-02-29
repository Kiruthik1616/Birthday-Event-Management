package com.birthday.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.dto.Admindto;


import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class AdminController {

    private AdminService employeeService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<Admindto> createEmployee(@RequestBody Admindto employeeDto) {
        Admindto savedEmployee = AdminService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<Admindto> getEmployeeId(@PathVariable("id") Long employeeId) {
        Admindto employeeDto = AdminService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<Admindto>> getAllEmployees() {
        List<Admindto> employees = AdminService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

}

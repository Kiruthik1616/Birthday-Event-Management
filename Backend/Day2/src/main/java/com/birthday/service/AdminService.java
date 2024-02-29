package com.birthday.service;

import java.util.List;

import com.birthday.dto.Admindto;


public interface AdminService {
    Admindto createEmployee(Admindto employeeDto);

    Admindto getEmployeeById(Long employeeId);

    List<Admindto> getAllEmployees();
}

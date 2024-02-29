package com.birthday.service.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.dto.Admindto;
import com.birthday.service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminImplementation implements AdminService {

    private AdminRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeedto) {

        Employee employee = EmployeeMapper.maptoEmployee(employeedto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + employeeId));

        return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<Admindto> getAllEmployees() {
        List<Admin> employees = AdminRepository.findAll();

        List<Admindto> employeeDtos = new ArrayList<>();
        for (Admin employee : employees) {
            employeeDtos.add(AdminMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }

}

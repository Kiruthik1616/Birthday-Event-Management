package com.birthday.mapper;

import com.birthday.dto.Admindto;
import com.birthday.entity.Admin;

public class AdminMapper {

    public static Admindto maptoEmployeeDto(Admin employee) {
        return new Admindto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail());
    }

    public static Admin maptoEmployee(Admindto employeedto) {
        return new Admin(
                employeedto.getId(),
                employeedto.getFirstName(),
                employeedto.getLastName(),
                employeedto.getEmail());
    }

}

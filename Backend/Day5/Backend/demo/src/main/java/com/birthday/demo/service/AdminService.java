package com.birthday.demo.service;

import java.util.List;

import com.birthday.demo.dto.AdminDto;

public interface AdminService {

    AdminDto createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long id);

    List<AdminDto> getAllAdmins();
}
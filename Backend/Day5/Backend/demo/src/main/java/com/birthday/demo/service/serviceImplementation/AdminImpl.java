package com.birthday.demo.service.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.demo.dto.AdminDto;
import com.birthday.demo.entity.Admin;
import com.birthday.demo.exception.ResourceNotFoundException;
import com.birthday.demo.mapper.AdminMapper;
import com.birthday.demo.repository.AdminRepository;
import com.birthday.demo.service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminImpl implements AdminService {

    private AdminRepository adminRepository;

    @Override
    public AdminDto createAdmin(AdminDto admindto) {

        Admin admin = AdminMapper.maptoAdmin(admindto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.maptoAdminDto(savedAdmin);
    }

    @Override
    public AdminDto getAdminById(Long adminId) {
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Admin is not exist with given id : " + adminId));

        return AdminMapper.maptoAdminDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();

        List<AdminDto> adminDtos = new ArrayList<>();
        for (Admin admin : admins) {
        adminDtos.add(AdminMapper.maptoAdminDto(admin));
        }

        return adminDtos;
    }

}

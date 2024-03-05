package com.birthday.demo.service;

import java.util.List;

import com.birthday.demo.dto.UserDto;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long id);

    List<UserDto> getAllUsers();
}
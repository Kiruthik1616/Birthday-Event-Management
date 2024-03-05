package com.birthday.demo.service.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.demo.dto.UserDto;
import com.birthday.demo.entity.User;
import com.birthday.demo.exception.ResourceNotFoundException;
import com.birthday.demo.mapper.UserMapper;
import com.birthday.demo.repository.UserRepository;
import com.birthday.demo.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userdto) {

        User user = UserMapper.maptoUser(userdto);
        User savedUser = userRepository.save(user);
        return UserMapper.maptoUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users= userRepository.findAll();
    
        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(UserMapper.maptoUserDto(user));
        }
    
        return userDtos;
    }
    
}
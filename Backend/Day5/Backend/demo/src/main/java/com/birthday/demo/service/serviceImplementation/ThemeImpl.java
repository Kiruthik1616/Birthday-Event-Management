package com.birthday.demo.service.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.demo.dto.ThemeDto;
import com.birthday.demo.entity.Theme;
import com.birthday.demo.exception.ResourceNotFoundException;
import com.birthday.demo.mapper.ThemeMapper;
import com.birthday.demo.repository.ThemeRepository;
import com.birthday.demo.service.ThemeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ThemeImpl implements ThemeService {

    private final ThemeRepository themeRepository;

    @Override
    public ThemeDto createTheme(ThemeDto themeDto) {
        Theme theme = ThemeMapper.mapToTheme(themeDto);
        Theme savedTheme = themeRepository.save(theme);
        return ThemeMapper.mapToThemeDto(savedTheme);
    }

    @Override
    public ThemeDto getThemeById(Long themeId) {
        Theme theme = themeRepository.findById(themeId)
                .orElseThrow(() -> new ResourceNotFoundException("Theme is not exist with given id : " + themeId));

        return ThemeMapper.mapToThemeDto(theme);
    }

    @Override
    public List<ThemeDto> getAllThemes() {
        List<Theme> themes = themeRepository.findAll();

        return themes.stream()
                .map(ThemeMapper::mapToThemeDto)
                .collect(Collectors.toList());
    }
}

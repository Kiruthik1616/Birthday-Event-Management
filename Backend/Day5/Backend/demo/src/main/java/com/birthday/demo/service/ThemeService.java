package com.birthday.demo.service;

import java.util.List;

import com.birthday.demo.dto.ThemeDto;

public interface ThemeService {

    ThemeDto createTheme(ThemeDto themeDto);

    ThemeDto getThemeById(Long id);

    List<ThemeDto> getAllThemes();
}

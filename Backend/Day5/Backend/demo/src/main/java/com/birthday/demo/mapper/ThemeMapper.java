package com.birthday.demo.mapper;

import com.birthday.demo.dto.ThemeDto;
import com.birthday.demo.entity.Theme;

public class ThemeMapper {

    public static ThemeDto mapToThemeDto(Theme theme) {
        return new ThemeDto(
                theme.getId(),
                theme.getName(),
                theme.getImage(),
                theme.getDescription(),
                theme.getPrice()
        );
    }

    public static Theme mapToTheme(ThemeDto themeDto) {
        return new Theme(
                themeDto.getId(),
                themeDto.getName(),
                themeDto.getImage(),
                themeDto.getDescription(),
                themeDto.getPrice()
        );
    }
}

package com.birthday.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.birthday.demo.dto.ThemeDto;
import com.birthday.demo.service.ThemeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/themes")
public class ThemeController {

    private final ThemeService themeService;

    // Create Theme REST API
    @PostMapping
    public ResponseEntity<ThemeDto> createTheme(@RequestBody ThemeDto themeDto) {
        ThemeDto savedTheme = themeService.createTheme(themeDto);
        return new ResponseEntity<>(savedTheme, HttpStatus.CREATED);
    }

    // Get Theme by ID REST API
    @GetMapping("/{id}")
    public ResponseEntity<ThemeDto> getThemeById(@PathVariable("id") Long themeId) {
        ThemeDto themeDto = themeService.getThemeById(themeId);
        return ResponseEntity.ok(themeDto);
    }

    // Get All Themes REST API
    @GetMapping
    public ResponseEntity<List<ThemeDto>> getAllThemes() {
        List<ThemeDto> themes = themeService.getAllThemes();
        return ResponseEntity.ok(themes);
    }
}

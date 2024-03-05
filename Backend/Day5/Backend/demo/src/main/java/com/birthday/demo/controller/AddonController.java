package com.birthday.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.birthday.demo.dto.AddonDto;
import com.birthday.demo.service.AddonService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/addons")
public class AddonController {

    private final AddonService addonService;

    // Create Addon REST API
    @PostMapping
    public ResponseEntity<AddonDto> createAddon(@RequestBody AddonDto addonDto) {
        AddonDto savedAddon = addonService.createAddon(addonDto);
        return new ResponseEntity<>(savedAddon, HttpStatus.CREATED);
    }

    // Get Addon by ID REST API
    @GetMapping("/{id}")
    public ResponseEntity<AddonDto> getAddonById(@PathVariable("id") Long addonId) {
        AddonDto addonDto = addonService.getAddonById(addonId);
        return ResponseEntity.ok(addonDto);
    }

    // Get All Addons REST API
    @GetMapping
    public ResponseEntity<List<AddonDto>> getAllAddons() {
        List<AddonDto> addons = addonService.getAllAddons();
        return ResponseEntity.ok(addons);
    }
}

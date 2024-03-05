package com.birthday.demo.service;

import java.util.List;

import com.birthday.demo.dto.AddonDto;

public interface AddonService {

    AddonDto createAddon(AddonDto addonDto);

    AddonDto getAddonById(Long id);

    List<AddonDto> getAllAddons();
}

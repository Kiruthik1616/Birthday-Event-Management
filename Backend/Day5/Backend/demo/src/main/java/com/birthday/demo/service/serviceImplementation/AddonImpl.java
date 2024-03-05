package com.birthday.demo.service.serviceImplementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.demo.dto.AddonDto;
import com.birthday.demo.entity.Addon;
import com.birthday.demo.exception.ResourceNotFoundException;
import com.birthday.demo.mapper.AddonMapper;
import com.birthday.demo.repository.AddonRepository;
import com.birthday.demo.service.AddonService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AddonImpl implements AddonService {

    private final AddonRepository addonRepository;

    @Override
    public AddonDto createAddon(AddonDto addonDto) {
        Addon addon = AddonMapper.mapToAddon(addonDto);
        Addon savedAddon = addonRepository.save(addon);
        return AddonMapper.mapToAddonDto(savedAddon);
    }

    @Override
    public AddonDto getAddonById(Long addonId) {
        Addon addon = addonRepository.findById(addonId)
                .orElseThrow(() -> new ResourceNotFoundException("Addon is not exist with given id : " + addonId));

        return AddonMapper.mapToAddonDto(addon);
    }

    @Override
    public List<AddonDto> getAllAddons() {
        List<Addon> addons = addonRepository.findAll();

        return addons.stream()
                .map(AddonMapper::mapToAddonDto)
                .collect(Collectors.toList());
    }
}

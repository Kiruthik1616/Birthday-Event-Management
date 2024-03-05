package com.birthday.demo.mapper;

import com.birthday.demo.dto.AddonDto;
import com.birthday.demo.entity.Addon;

public class AddonMapper {

    public static AddonDto mapToAddonDto(Addon addon) {
        return new AddonDto(
                addon.getId(),
                addon.getName(),
                addon.getDescription(),
                addon.getPrice()
        );
    }

    public static Addon mapToAddon(AddonDto addonDto) {
        return new Addon(
                addonDto.getId(),
                addonDto.getName(),
                addonDto.getDescription(),
                addonDto.getPrice()
        );
    }
}

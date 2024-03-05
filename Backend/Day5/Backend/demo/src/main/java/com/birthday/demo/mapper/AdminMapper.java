package com.birthday.demo.mapper;

import com.birthday.demo.dto.AdminDto;
import com.birthday.demo.entity.Admin;

public class AdminMapper {

    public static AdminDto maptoAdminDto(Admin admin ){
        return new AdminDto(
                admin.getId(),
                admin.getFirstName(),
                admin.getLastName(),
                admin.getEmail());
    }

    public static Admin maptoAdmin(AdminDto admindto) {
        return new Admin(
                admindto.getId(),
                admindto.getFirstName(),
                admindto.getLastName(),
                admindto.getEmail());
    }

}

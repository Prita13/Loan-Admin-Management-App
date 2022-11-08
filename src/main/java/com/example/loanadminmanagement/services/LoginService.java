package com.example.loanadminmanagement.services;


import com.example.loanadminmanagement.utils.Constants;
import com.example.loanadminmanagement.models.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginService {



    public void adminAuthentication(LoginDto loginDto) throws Exception{
        System.out.println("Entered in authentication testing");
        System.out.println(loginDto.getAdminUsername());
        System.out.println(loginDto.getPassword());
        System.out.println(Constants.adminPassword);
        System.out.println(Constants.adminUsername);

        if((!loginDto.getAdminUsername().equals(Constants.adminUsername)) || (!loginDto.getPassword().equals(Constants.adminPassword))){
            throw new Exception("Invalid credentials");
        }


    }
}

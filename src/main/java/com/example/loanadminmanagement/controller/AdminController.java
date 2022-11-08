package com.example.loanadminmanagement.controller;


import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.LoginDto;
import com.example.loanadminmanagement.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/admin")
@RestController
public class AdminController {

    @Autowired
    LoginService loginService;

    @PostMapping(value="/login", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> adminAuthenticate(@RequestBody LoginDto loginDto) {

        try{

            loginService.adminAuthentication(loginDto);
            return new ResponseEntity<String>("Successful Login", null, 201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid Credentials", null, 400);
        }

    }
}

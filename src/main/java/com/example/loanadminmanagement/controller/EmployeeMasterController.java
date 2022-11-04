package com.example.loanadminmanagement.controller;

import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/employee")
@RestController
public class EmployeeMasterController {

    @Autowired
    EmployeeService employeeService;


    @PostMapping(value="/addEmployee", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public void addEmployee(@RequestBody Employee employee) {

        //System.out.println("Creating emplyee.....");

        employeeService.addEmployee(employee);

    }
}

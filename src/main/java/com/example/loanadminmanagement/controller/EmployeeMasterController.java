package com.example.loanadminmanagement.controller;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employee")
@RestController
public class EmployeeMasterController {

    @Autowired
    EmployeeService employeeService;


    @PostMapping(value="/addEmployee", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> addEmployee(@RequestBody Employee employee) {

        try{

            employeeService.addEmployee(employee);
            return new ResponseEntity<Employee>(employee, null, 201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid Employee details", null, 400);
        }

    }

    @GetMapping(value="/getAllEmployees", produces= MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> getAllEmployees() {

        try{
            List<EmployeeMaster> listEmployee = employeeService.getAllEmployees();
            return new ResponseEntity<List<EmployeeMaster>>(listEmployee, null, 201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid Employee details", null, 400);
        }

    }

    @PostMapping(value="/editEmployee", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> editEmployee(@RequestBody Employee employee) {

        try{
            employeeService.editEmployee(employee);
            List<EmployeeMaster> listEmployee = employeeService.getAllEmployees();
            return new ResponseEntity<List<EmployeeMaster>>(listEmployee, null, 201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid Employee details", null, 400);
        }

    }

    @PostMapping(value="/deleteEmployee/{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId") Long employeeId) {

        employeeService.deleteEmployee(employeeId);

    }


}

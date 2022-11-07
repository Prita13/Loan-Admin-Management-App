package com.example.loanadminmanagement.services;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.mappers.EmployeeMapper;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    public void addEmployee(Employee employee) throws Exception {

        Optional<EmployeeMaster> emp = employeeRepository.findById(employee.getEmployeeId());

        if (emp.isPresent()) {
            throw new Exception("Employee with employeeId already exists!");
        } else {

            EmployeeMaster employeeMaster = new EmployeeMaster();

            employeeMaster.setDateOfBirth(employee.getDateOfBirth());
            employeeMaster.setDateOfJoining(employee.getDateOfJoining());
            employeeMaster.setDepartment(employee.getDepartment());
            employeeMaster.setDesignation(employee.getDesignation());
            employeeMaster.setGender(employee.getGender());
            employeeMaster.setEmployeeName(employee.getEmployeeName());
            employeeMaster.setEmployeeId(employee.getEmployeeId());

            employeeRepository.save(employeeMaster);
        }
    }

    public void editEmployee(Employee employee){
        Optional<EmployeeMaster> employeeMaster = employeeRepository.findById(employee.getEmployeeId());
        EmployeeMaster currentEmployee = employeeMaster.get();

        currentEmployee.setDateOfBirth(employee.getDateOfBirth());
        currentEmployee.setDateOfJoining(employee.getDateOfJoining());
        currentEmployee.setDepartment(employee.getDepartment());
        currentEmployee.setDesignation(employee.getDesignation());
        currentEmployee.setGender(employee.getGender());
        currentEmployee.setEmployeeName(employee.getEmployeeName());


        employeeRepository.save(currentEmployee);

    }

    public List<EmployeeMaster> getAllEmployees(){

        List<EmployeeMaster> employeeList = employeeRepository.findAll();

        return employeeList;

    }

    public void deleteEmployee(Long employeeId){
        employeeRepository.deleteById(employeeId);
    }

}


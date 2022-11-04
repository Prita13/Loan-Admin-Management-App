package com.example.loanadminmanagement.services;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.mappers.EmployeeMapper;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    public void addEmployee(Employee employee){
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

    public void deleteEmployee(Long employeeId){
        employeeRepository.deleteById(employeeId);
    }

}


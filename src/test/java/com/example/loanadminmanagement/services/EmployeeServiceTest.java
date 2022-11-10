package com.example.loanadminmanagement.services;

//import org.junit.jupiter.api.Test;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.repository.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @InjectMocks
    EmployeeService service;

    @Mock
    EmployeeRepository employeeRepository;

    @Test
    void testAddEmployee() throws Exception{
        Employee employee = new Employee();
        employee.setDepartment("finance");
        employee.setEmployeeId(246809L);
        employee.setDateOfBirth( new Date());
        employee.setDateOfJoining(new Date());
        employee.setDesignation("CET");
        employee.setEmployeeName("Ronit");
        employee.setGender("MALE");
        Optional<EmployeeMaster> emp =Optional.empty();
//        emp.setDepartment("finance");
//        emp.setEmployeeId(897654L);
//        emp.setDateOfBirth( new Date());
//        emp.setDateOfJoining(new Date());
//        emp.setDesignation("CET");
//        emp.setEmployeeName("Ronit");
//        emp.setGender("MALE");
        when(employeeRepository.findById(employee.getEmployeeId())).thenReturn(emp);
        service.addEmployee(employee);
    }
    @Test
    void testGetAllEmployees() throws Exception{
        List<EmployeeMaster> employeeList = new ArrayList<>();
        EmployeeMaster emp1 = new EmployeeMaster();
        emp1.setEmployeeId(9865L);
        EmployeeMaster emp2 = new EmployeeMaster();
        emp2.setEmployeeId(4589L);
        employeeList.add(emp1);
        employeeList.add(emp2);
        when(employeeRepository.findAll()).thenReturn(employeeList);
        service.getAllEmployees();

    }
}

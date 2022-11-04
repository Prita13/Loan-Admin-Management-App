package com.example.loanadminmanagement.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    String employeeId;
    String employeeName;
    String designation;
    String department;
    Character gender;
    Date dateOfBirth;
    Date dateOfJoining;
}

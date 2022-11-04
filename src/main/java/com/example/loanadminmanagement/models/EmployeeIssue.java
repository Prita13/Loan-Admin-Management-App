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
public class EmployeeIssue {
    String employeeId;
    String issueId;
    String itemId;
    Date returnDate;
    Date issueDate;
}

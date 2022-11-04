package com.example.loanadminmanagement.entity;

import javax.persistence.*;
import java.util.Date;

public class EmployeeIssueDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="issue_id")
    private Long issueId;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private EmployeeMaster employeeMaster;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private ItemMaster itemMaster;

    @Column(name = "issue_date")
    private Date issueDate;

    @Column(name = "return_date")
    private Date returnDate;
}

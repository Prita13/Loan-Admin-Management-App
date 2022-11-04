package com.example.loanadminmanagement.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="employee_card_details")
public class EmployeeCardDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private EmployeeMaster employeeMaster;

    @ManyToOne
    @JoinColumn(name = "loan_id")
    private LoanCardMaster loanCardMaster;

    @Column(name = "card_issue_date")
    private Date cardIssueDate;
}

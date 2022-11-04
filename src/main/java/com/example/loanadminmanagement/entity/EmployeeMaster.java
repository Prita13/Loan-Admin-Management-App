package com.example.loanadminmanagement.entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="employee_master")
public class EmployeeMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="employee_id")
    private Long employeeId;

    @Column(name = "employee_name")
    private String employeeName;

    @Column(name = "designation")
    private String designation;

    @Column(name = "department")
    private String department;

    @Column(name ="gender")
    private Character gender;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "date_of_joining")
    private Date dateOfJoining;


}

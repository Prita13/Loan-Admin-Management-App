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
    @Column(name="employee_id")
    private Long employeeId;

    @Column(name = "employee_name")
    private String employeeName;

    @Column(name = "designation")
    private String designation;

    @Column(name = "department")
    private String department;

    public Long getEmployeeId() {
        return employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public String getDesignation() {
        return designation;
    }

    public String getDepartment() {
        return department;
    }

    public String getGender() {
        return gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    @Column(name ="gender")
    private String gender;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "date_of_joining")
    private Date dateOfJoining;



}

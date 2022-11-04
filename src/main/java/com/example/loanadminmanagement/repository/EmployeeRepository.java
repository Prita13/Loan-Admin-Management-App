package com.example.loanadminmanagement.repository;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeMaster,Long> {
}

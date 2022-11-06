package com.example.loanadminmanagement.repository;

import com.example.loanadminmanagement.entity.LoanCardMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanCardRepository extends JpaRepository<LoanCardMaster,String> {
}

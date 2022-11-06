package com.example.loanadminmanagement.services;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.repository.LoanCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanCardService {

    @Autowired
    LoanCardRepository loanCardRepository;

    public void addLoanCard(LoanCard loanCard){
        LoanCardMaster loanCardMaster = new LoanCardMaster();

        loanCardMaster.setLoanId(loanCard.getLoanId());
        loanCardMaster.setLoanType(loanCard.getLoanType());
        loanCardMaster.setDurationInYears(loanCard.getDurationInYears());

        loanCardRepository.save(loanCardMaster);
    }

    public void deleteLoanCard(String loanId){
        loanCardRepository.deleteById(loanId);
    }


}

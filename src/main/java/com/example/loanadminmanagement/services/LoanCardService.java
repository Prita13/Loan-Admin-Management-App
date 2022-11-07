package com.example.loanadminmanagement.services;

import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.repository.LoanCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanCardService {

    @Autowired
    LoanCardRepository loanCardRepository;

    public void addLoanCard(LoanCard loanCard) throws Exception {
        Optional<LoanCardMaster> searchedLoanCard = loanCardRepository.findById(loanCard.getLoanId());

        if(searchedLoanCard.isPresent()){
            throw new Exception("LoanCard already present!");
        }
        else {
            LoanCardMaster loanCardMaster = new LoanCardMaster();

            loanCardMaster.setLoanId(loanCard.getLoanId());
            loanCardMaster.setLoanType(loanCard.getLoanType());
            loanCardMaster.setDurationInYears(loanCard.getDurationInYears());

            loanCardRepository.save(loanCardMaster);
        }
    }

    public List<LoanCardMaster> getAllLoanCards(){

        List<LoanCardMaster> loanCardList = loanCardRepository.findAll();

        return loanCardList;

    }

    public void editLoanCard(LoanCard loanCard){
        Optional<LoanCardMaster> loanCardMaster = loanCardRepository.findById(loanCard.getLoanId());
        LoanCardMaster currentLoanCard = loanCardMaster.get();

        currentLoanCard.setLoanType(loanCard.getLoanType());
        currentLoanCard.setDurationInYears(loanCard.getDurationInYears());

        loanCardRepository.save(currentLoanCard);

    }

    public void deleteLoanCard(String loanId){
        loanCardRepository.deleteById(loanId);
    }


}

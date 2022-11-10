package com.example.loanadminmanagement.services;

import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.repository.LoanCardRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LoanCardServiceTest {

    @InjectMocks
    LoanCardService service;

    @Mock
    LoanCardRepository repository;

    @Test
    void testAddLoanCard() throws Exception{
        LoanCard loanCard =new LoanCard();
        loanCard.setDurationInYears(2);
        loanCard.setLoanId("487");
        loanCard.setLoanType("House");
        Optional<LoanCardMaster> searchedLoanCard =Optional.empty();
//        emp.setDepartment("finance");
//        emp.setEmployeeId(897654L);
//        emp.setDateOfBirth( new Date());
//        emp.setDateOfJoining(new Date());
//        emp.setDesignation("CET");
//        emp.setEmployeeName("Ronit");
//        emp.setGender("MALE");
        when(repository.findById(loanCard.getLoanId())).thenReturn(searchedLoanCard);
        service.addLoanCard(loanCard);
    }
    @Test
    void testGetAllLoanCards() throws Exception{
        List<LoanCardMaster> loanCardList = new ArrayList<>();
        LoanCardMaster loan1 = new LoanCardMaster();
        loan1.setLoanType("Car");
        LoanCardMaster loan2 = new LoanCardMaster();
        loan2.setLoanType("House");
        loanCardList.add(loan1);
        loanCardList.add(loan2);
        when(repository.findAll()).thenReturn(loanCardList);
        service.getAllLoanCards();
    }
}

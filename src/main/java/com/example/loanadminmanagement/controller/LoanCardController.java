package com.example.loanadminmanagement.controller;

import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.services.LoanCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/loanCard")
@RestController
public class LoanCardController {

    @Autowired
    LoanCardService loanCardService;

    @PostMapping(value="/addLoanCard", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> addLoanCard(@RequestBody LoanCard loanCard) {



        try {
            loanCardService.addLoanCard(loanCard);
            List<LoanCardMaster> loanCardList = loanCardService.getAllLoanCards();
            return new ResponseEntity<List<LoanCardMaster>>(loanCardList,null,201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid LoanCard details", null, 400);
        }

    }

    @PostMapping(value="/editLoanCard", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> editLoanCard(@RequestBody LoanCard loanCard) {



        try {
            loanCardService.addLoanCard(loanCard);
            List<LoanCardMaster> loanCardList = loanCardService.getAllLoanCards();
            return new ResponseEntity<List<LoanCardMaster>>(loanCardList,null,201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid LoanCard details", null, 400);
        }


    }

    @PostMapping(value="/deleteLoanCard/{loanId}")
    public void deleteLoanCard(@PathVariable("loanId") String loanId) {

        //System.out.println("Creating emplyee.....");
        loanCardService.deleteLoanCard(loanId);

    }

}

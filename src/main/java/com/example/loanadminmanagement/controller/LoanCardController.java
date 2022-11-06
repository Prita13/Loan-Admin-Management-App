package com.example.loanadminmanagement.controller;

import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.services.LoanCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/loanCard")
@RestController
public class LoanCardController {

    @Autowired
    LoanCardService loanCardService;

    @PostMapping(value="/addLoanCard", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public void addEmployee(@RequestBody LoanCard loanCard) {

        //System.out.println("Creating employee.....");

        loanCardService.addLoanCard(loanCard);

    }

    @PostMapping(value="/deleteLoanCard/{loanId}")
    public void deleteLoanCard(@PathVariable("loanId") String loanId) {

        //System.out.println("Creating emplyee.....");
        loanCardService.deleteLoanCard(loanId);

    }

}

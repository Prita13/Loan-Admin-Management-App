package com.example.loanadminmanagement.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanCard {
    String loanId;
    String loanType;

    public String getLoanId() {
        return loanId;
    }

    public String getLoanType() {
        return loanType;
    }

    public Integer getDurationInYears() {
        return durationInYears;
    }

    Integer durationInYears;
}

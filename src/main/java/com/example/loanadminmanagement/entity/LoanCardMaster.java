package com.example.loanadminmanagement.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="loan_card_master")
public class LoanCardMaster {

    @Id
    @Column(name="loan_id")
    private String loanId;

    public void setLoanId(String loanId) {
        this.loanId = loanId;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public void setDurationInYears(Integer durationInYears) {
        this.durationInYears = durationInYears;
    }

    @Column(name=  "loan_type")
    private String loanType;

    @Column(name = "duration_in_years")
    private Integer durationInYears;
}

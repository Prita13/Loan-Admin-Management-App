package com.example.loanadminmanagement.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    String itemId;
    String itemDescription;
    Character issueStatus;
    Integer itemValuation;
    String itemCategory;
    String itemMake;
}

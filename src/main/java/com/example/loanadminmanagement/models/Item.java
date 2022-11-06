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
    String issueStatus;
    Integer itemValuation;
    String itemCategory;
    String itemMake;

    public String getItemId() {
        return itemId;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public String getIssueStatus() {
        return issueStatus;
    }

    public Integer getItemValuation() {
        return itemValuation;
    }

    public String getItemCategory() {
        return itemCategory;
    }

    public String getItemMake() {
        return itemMake;
    }
}

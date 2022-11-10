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

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public void setIssueStatus(String issueStatus) {
        this.issueStatus = issueStatus;
    }

    public void setItemValuation(Integer itemValuation) {
        this.itemValuation = itemValuation;
    }

    public void setItemCategory(String itemCategory) {
        this.itemCategory = itemCategory;
    }

    public void setItemMake(String itemMake) {
        this.itemMake = itemMake;
    }
}

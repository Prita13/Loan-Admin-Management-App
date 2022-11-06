package com.example.loanadminmanagement.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="item_master")
public class ItemMaster {

    @Id

    @Column(name="item_id")
    private String itemId;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "issue_status")
    private String issueStatus;

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public void setIssueStatus(String issueStatus) {
        this.issueStatus = issueStatus;
    }

    public void setItemCategory(String itemCategory) {
        this.itemCategory = itemCategory;
    }

    public void setItemMake(String itemMake) {
        this.itemMake = itemMake;
    }

    public void setItemValuation(Integer itemValuation) {
        this.itemValuation = itemValuation;
    }

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "item_make")
    private String itemMake;

    @Column(name = "item_valuation")
    private Integer itemValuation;

}

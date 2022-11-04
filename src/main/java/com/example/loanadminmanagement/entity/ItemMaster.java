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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="item_id")
    private Long itemId;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "item_status")
    private Character itemStatus;

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "item_make")
    private String itemMake;

    @Column(name = "item_valuation")
    private Integer itemValuation;

}

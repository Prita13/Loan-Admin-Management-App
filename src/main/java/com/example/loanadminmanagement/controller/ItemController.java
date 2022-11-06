package com.example.loanadminmanagement.controller;


import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/item")
@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping(value="/addItem", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public void addItem(@RequestBody Item item) {

        //System.out.println("Creating employee.....");

        itemService.addItem(item);

    }

    @PostMapping(value="/deleteItem/{itemId}")
    public void deleteItem(@PathVariable("itemId") String itemId) {

        //System.out.println("Creating emplyee.....");
        itemService.deleteItem(itemId);

    }

}

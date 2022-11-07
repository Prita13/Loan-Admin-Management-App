package com.example.loanadminmanagement.controller;


import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/item")
@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping(value="/addItem", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> addItem(@RequestBody Item item) {
        try {
            itemService.addItem(item);
            List<ItemMaster> itemList = itemService.getAllItems();
            return new ResponseEntity<List<ItemMaster>>(itemList,null,201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid item details", null, 400);
        }

    }

    @PostMapping(value="/editItem", produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> editItem(@RequestBody Item item) {

        try{
            itemService.editItem(item);
            List<ItemMaster> listItem = itemService.getAllItems();
            return new ResponseEntity<List<ItemMaster>>(listItem, null, 201);
        }
        catch(Exception e) {
            return new ResponseEntity<String>("Invalid item details", null, 400);
        }

    }

    @PostMapping(value="/deleteItem/{itemId}")
    public void deleteItem(@PathVariable("itemId") String itemId) {


        itemService.deleteItem(itemId);

    }

}

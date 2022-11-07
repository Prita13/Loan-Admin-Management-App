package com.example.loanadminmanagement.services;


import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public void addItem(Item item) throws Exception {

        Optional<ItemMaster> searchedItem = itemRepository.findById(item.getItemId());

        if(searchedItem.isPresent()){
            throw new Exception("Item already exists!");
        }
        else {
            ItemMaster itemMaster = new ItemMaster();

            itemMaster.setItemId(item.getItemId());
            itemMaster.setIssueStatus(item.getIssueStatus());
            itemMaster.setItemCategory(item.getItemCategory());
            itemMaster.setItemDescription(item.getItemDescription());
            itemMaster.setItemMake(item.getItemMake());
            itemMaster.setItemValuation(item.getItemValuation());

            itemRepository.save(itemMaster);
        }
    }

    public void editItem(Item item){
        Optional<ItemMaster> itemMaster = itemRepository.findById(item.getItemId());
        ItemMaster currentItem = itemMaster.get();

        currentItem.setIssueStatus(item.getIssueStatus());
        currentItem.setItemCategory(item.getItemCategory());
        currentItem.setItemDescription(item.getItemDescription());
        currentItem.setItemMake(item.getItemMake());
        currentItem.setItemValuation(item.getItemValuation());

        itemRepository.save(currentItem);


    }
    public List<ItemMaster> getAllItems(){

        List<ItemMaster> itemList = itemRepository.findAll();

        return itemList;

    }

    public void deleteItem(String itemId){
        itemRepository.deleteById(itemId);
    }

}

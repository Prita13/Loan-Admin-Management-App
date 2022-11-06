package com.example.loanadminmanagement.services;


import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.entity.LoanCardMaster;
import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.models.LoanCard;
import com.example.loanadminmanagement.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public void addItem(Item item){
        ItemMaster itemMaster = new ItemMaster();

        itemMaster.setItemId(item.getItemId());
        itemMaster.setIssueStatus(item.getIssueStatus());
        itemMaster.setItemCategory(item.getItemCategory());
        itemMaster.setItemDescription(item.getItemDescription());
        itemMaster.setItemMake(item.getItemMake());
        itemMaster.setItemValuation(item.getItemValuation());

        itemRepository.save(itemMaster);
    }

    public void deleteItem(String itemId){
        itemRepository.deleteById(itemId);
    }

}

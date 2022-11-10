package com.example.loanadminmanagement.services;


import com.example.loanadminmanagement.entity.EmployeeMaster;
import com.example.loanadminmanagement.entity.ItemMaster;
import com.example.loanadminmanagement.models.Employee;
import com.example.loanadminmanagement.models.Item;
import com.example.loanadminmanagement.repository.ItemRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ItemServiceTest {

    @InjectMocks
    ItemService service;

    @Mock
    ItemRepository itemRepository;

    @Test
    void testAddItem() throws Exception{
        Item item =new Item();
        item.setIssueStatus("ACTIVE");
        item.setItemCategory("FRUIT");
        item.setItemDescription("MANGO");
        item.setItemId("589");
        item.setItemMake("SUN");
        item.setItemValuation(20);
        Optional<ItemMaster> searchedItem =Optional.empty();
//        emp.setDepartment("finance");
//        emp.setEmployeeId(897654L);
//        emp.setDateOfBirth( new Date());
//        emp.setDateOfJoining(new Date());
//        emp.setDesignation("CET");
//        emp.setEmployeeName("Ronit");
//        emp.setGender("MALE");
        when(itemRepository.findById(item.getItemId())).thenReturn(searchedItem);
        service.addItem(item);
    }
    @Test
    void testGetAllEmployees() throws Exception{
        List<ItemMaster> itemList = new ArrayList<>();
        ItemMaster item1 = new ItemMaster();
        item1.setItemId("349");
        ItemMaster item2 = new ItemMaster();
        item2.setItemId("396");
        itemList.add(item1);
        itemList.add(item2);
        when(itemRepository.findAll()).thenReturn(itemList);
        service.getAllItems();

    }

}

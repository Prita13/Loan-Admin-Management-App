package com.example.loanadminmanagement.repository;

import com.example.loanadminmanagement.entity.ItemMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemMaster, String> {
}

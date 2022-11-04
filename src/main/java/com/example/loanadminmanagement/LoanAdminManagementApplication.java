package com.example.loanadminmanagement;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication()
@ComponentScan(basePackages = "com.example.loanadminmanagement")
@EnableJpaRepositories(basePackages = "com.example.loanadminmanagement")
@Slf4j
@Configuration
public class LoanAdminManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoanAdminManagementApplication.class, args);
	}

}

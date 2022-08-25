package com.rpgsheets.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rpgsheets.models.Account;
import com.rpgsheets.service.AccountService;

@RestController("rpgaccountController")
@RequestMapping(path="/account")
public class AccountController {

	@Autowired
	AccountService accountService;
	
	@RequestMapping(path="/login")
	public String accountLogin(@RequestBody Account account, HttpServletRequest request) {	
		return this.accountService.accountLogin(account, request);				
	}
	
	@RequestMapping(path="/new")
	public String newAccount(@RequestBody Account account, HttpServletRequest request) {
		return this.accountService.clientCreateAccount(account, request);
	}
}

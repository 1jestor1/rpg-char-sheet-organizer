package com.rpgsheets.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rpgsheets.models.Account;
import com.rpgsheets.service.AccountService;

@RestController("rpgaccountController")
@RequestMapping(path="/account")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials="true")
public class AccountController {
	
	@Autowired
	AccountService accountService;
	
	@RequestMapping(path="/login")
	public Account accountLogin(@RequestBody Account account, HttpSession session) {	
		return this.accountService.accountLogin(account,session);				
	}
	
	@RequestMapping(path="/logout")
	public String accountLogout(HttpSession session) {
		return this.accountService.accountLogout(session);
	}
	
	@RequestMapping(path="/create")
	public String accountCreate(@RequestBody Account account, HttpSession session) {
		return this.accountService.accountCreation(account, session);
	}
	
	@RequestMapping(path="/checksession")
	public String checkSession(HttpSession session) {
		return "the account id is " + session.getAttribute("accountid");
	}
	
}


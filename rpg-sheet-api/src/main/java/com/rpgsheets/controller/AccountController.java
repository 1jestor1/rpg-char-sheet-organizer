package com.rpgsheets.controller;

import javax.servlet.http.HttpServletRequest;
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
	public String accountLogin(@RequestBody Account account, HttpServletRequest request) {	
		return this.accountService.accountLogin(account,request);				
	}
	
	@RequestMapping(path="/checkSession")
	public String checkSession(HttpServletRequest request) {
		HttpSession session = request.getSession();
		return "the account id is " + session.getAttribute("accountid");
	}
	
}


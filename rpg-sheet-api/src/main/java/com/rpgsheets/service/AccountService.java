package com.rpgsheets.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rpgsheets.models.Account;
import com.rpgsheets.repositories.AccountRepository;

@Service("rpgaccountService")
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;
	
	public Account accountLogin(Account account, HttpSession session) {
		Account loginAttempt = this.accountRepository.findByUsernameAndPassword(account.getUsername(),account.getPassword());
		if(loginAttempt==null) return null;
		session.setAttribute("accountid", loginAttempt.getId());
		loginAttempt.setPassword(null);
		return loginAttempt;
	}
	
	public String accountCreation(Account account, HttpSession session) {
		session.invalidate();
		if(accountRepository.findByUsername(account.getUsername())==null) return "USERNAME TAKEN";
		accountRepository.save(account);
		return "ACCOUNT CREATED";
	}
	
	public String accountLogout(HttpSession session) {
		session.invalidate();
		return "LOGGED OUT";
	}
}

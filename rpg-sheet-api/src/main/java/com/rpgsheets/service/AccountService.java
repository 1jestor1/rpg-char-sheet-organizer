package com.rpgsheets.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rpgsheets.models.Account;
import com.rpgsheets.repositories.AccountRepository;

@Service("rpgaccountService")
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;
	
	public String accountLogin(Account account, HttpServletRequest request) {
		Account loginAttempt = this.accountRepository.findByUsernameAndPassword(account.getUsername(),account.getPassword());
		if(loginAttempt==null) return "bad-login";
		HttpSession session = request.getSession();
		session.setAttribute("accountid", loginAttempt.getId());
		return "good-login";
	}
}

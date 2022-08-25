package com.rpgsheets.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rpgsheets.models.Account;

@Repository("rpgaccountRepository")
public interface AccountRepository extends JpaRepository<Account, Integer>{
	
	<S extends Account> S save(S entity);
	Account findByUsernameAndPassword(String username, String password);
}

package com.rpgsheets.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="rpgaccount")
public class Account {



//fields
	@Id
	@Column(name="id")
	@GeneratedValue(generator="rpgaccount_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize=1, name="rpgaccount_id_seq")
	private int id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;

	
	//constructors
	public Account() {}
	
	public Account(int id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
	
	public Account(String username, String password) {
		this.username=username;
		this.password=password;
	}
	
	//getters and setters
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
}

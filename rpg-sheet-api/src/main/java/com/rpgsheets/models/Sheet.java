package com.rpgsheets.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="rpgsheet")
public class Sheet {

	//fields
	@Id
	@Column(name="id")
	@GeneratedValue(generator="rpgsheet_id_seq", strategy=GenerationType.AUTO)
	@SequenceGenerator(allocationSize=1, name="rpgsheet_id_seq")
	private int id;
	
	@Column(name="charname")
	private String charname;
	
	@Column(name="charart")
	private String charart;

	//constructors
	public Sheet() {}
	
	public Sheet(int id, String charname, String charart) {
		super();
		this.id = id;
		this.charname = charname;
		this.charart = charart;
	}
	
	//getters and setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCharname() {
		return charname;
	}

	public void setCharname(String charname) {
		this.charname = charname;
	}

	public String getCharart() {
		return charart;
	}

	public void setCharart(String charart) {
		this.charart = charart;
	}
	
}

package com.cricinfo.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table
public class BowlingInfo {
	
	@Id
	private int id;
	private int isBowler;
	private int numberOfBallsBowled;
	private int	runsGiven;
	private int wktsTaken;
	private int bowlingEconomy;
	private int fiveWickets;
	private String name;
	
//	@OneToOne
//	@PrimaryKeyJoinColumn
//	private PlayerInfo playerInfo;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIsBowler() {
		return isBowler;
	}
	public void setIsBowler(int isBowler) {
		this.isBowler = isBowler;
	}
	public int getNumberOfBallsBowled() {
		return numberOfBallsBowled;
	}
	public void setNumberOfBallsBowled(int numberOfBallsBowled) {
		this.numberOfBallsBowled = numberOfBallsBowled;
	}
	public int getRunsGiven() {
		return runsGiven;
	}
	public void setRunsGiven(int runsGiven) {
		this.runsGiven = runsGiven;
	}
	public int getWktsTaken() {
		return wktsTaken;
	}
	public void setWktsTaken(int wktsTaken) {
		this.wktsTaken = wktsTaken;
	}
	public int getBowlingEconomy() {
		return bowlingEconomy;
	}
	public void setBowlingEconomy(int bowlingEconomy) {
		this.bowlingEconomy = bowlingEconomy;
	}
	public int getFiveWickets() {
		return fiveWickets;
	}
	public void setFiveWickets(int fiveWickets) {
		this.fiveWickets = fiveWickets;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}

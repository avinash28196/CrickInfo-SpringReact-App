package com.cricinfo.models;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class PlayerInfo {
	
	
	private int playerid;
	
	@Id
	private String name;
	private String nationality;
	private int value;
	private int	matches;	
	private int inningsPlayed;
	private int catchesTaken;
	private int isCaptain;
	private int isWicketKeeper;
	private String team;
	
//	@OneToOne(mappedBy = "playerInfo", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//	private BattingInfo battingInfo;
//	
//	@OneToOne
//	@JoinColumn(name="name")
//	private BowlingInfo bowlingInfo;
//	
//	@OneToOne
//	@JoinColumn(unique=true)
//	private BowlingInfo bowlingInfo;
	

	


	public PlayerInfo() {
		
	}
	
	
//	public PlayerInfo(String name, BattingInfo battingInfo) {
//		this.name = name;
//		this.battingInfo = battingInfo;
//		this.battingInfo.getRunScored();
//	}
	 
	public int getPlayerid() {
		return playerid;
	}
	public void setPlayerid(int playerid) {
		this.playerid = playerid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public int getMatches() {
		return matches;
	}
	public void setMatches(int matches) {
		this.matches = matches;
	}
	public int getInningsPlayed() {
		return inningsPlayed;
	}
	public void setInningsPlayed(int inningsPlayed) {
		this.inningsPlayed = inningsPlayed;
	}
	public int getCatchesTaken() {
		return catchesTaken;
	}
	public void setCatchesTaken(int catchesTaken) {
		this.catchesTaken = catchesTaken;
	}
	public int getIsCaptain() {
		return isCaptain;
	}
	public void setIsCaptain(int isCaptain) {
		this.isCaptain = isCaptain;
	}
	public int getIsWicketKeeper() {
		return isWicketKeeper;
	}
	public void setIsWicketKeeper(int isWicketKeeper) {
		this.isWicketKeeper = isWicketKeeper;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
//	public BattingInfo getBattingInfo() {
//		return battingInfo;
//	}
//	public void setBattingInfo(BattingInfo battingInfo) {
//		this.battingInfo = battingInfo;
//	}
//	public BowlingInfo getBowlingInfo() {
//		return bowlingInfo;
//	}
//
//
//	public void setBowlingInfo(BowlingInfo bowlingInfo) {
//		this.bowlingInfo = bowlingInfo;
//	}
}

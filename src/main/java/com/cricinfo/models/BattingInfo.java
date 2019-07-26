package com.cricinfo.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class BattingInfo {
	
	@Id
	private int id;
	private int runScored;
	private String highestScore;
	private int  isBatsman;
	private int battingAvg;
	private int ballsFaced;
	private int strikeRate;
	private int centuries;
	private int halfCenturies;
	private int fours;
	private int sixes;
	private int notouts;
	private String name;
	
	
//	@OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "playerid")
//	private PlayerInfo playerInfo;
	
	
	
	public BattingInfo() {
		super();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRunScored() {
		return runScored;
	}
	public void setRunScored(int runScored) {
		this.runScored = runScored;
	}
	public String getHighestScore() {
		return highestScore;
	}
	public void setHighestScore(String highestScore) {
		this.highestScore = highestScore;
	}
	public int getIsBatsman() {
		return isBatsman;
	}
	public void setIsBatsman(int isBatsman) {
		this.isBatsman = isBatsman;
	}
	public int getBattingAvg() {
		return battingAvg;
	}
	public void setBattingAvg(int battingAvg) {
		this.battingAvg = battingAvg;
	}
	public int getBallsFaced() {
		return ballsFaced;
	}
	public void setBallsFaced(int ballsFaced) {
		this.ballsFaced = ballsFaced;
	}
	public int getStrikeRate() {
		return strikeRate;
	}
	public void setStrikeRate(int strikeRate) {
		this.strikeRate = strikeRate;
	}
	public int getCenturies() {
		return centuries;
	}
	public void setCenturies(int centuries) {
		this.centuries = centuries;
	}
	public int getHalfCenturies() {
		return halfCenturies;
	}
	public void setHalfCenturies(int halfCenturies) {
		this.halfCenturies = halfCenturies;
	}
	public int getFours() {
		return fours;
	}
	public void setFours(int fours) {
		this.fours = fours;
	}
	public int getSixes() {
		return sixes;
	}
	public void setSixes(int sixes) {
		this.sixes = sixes;
	}
	public int getNotouts() {
		return notouts;
	}
	public void setNotouts(int notouts) {
		this.notouts = notouts;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	

}

package com.cricinfo.models.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cricinfo.models.BowlingInfo;
import com.cricinfo.repository.BowlingInfoRepository;

@RestController
public class BowlingInfoController {
	
	@Autowired
	private BowlingInfoRepository bowlingInfoRepository;
	
	@GetMapping("Api/Bowler/{name}")
	public Optional<BowlingInfo> getBowlerInfo(@PathVariable String name, Pageable pageable){
		return bowlingInfoRepository.findByName(name);
	}
	
	
	
}

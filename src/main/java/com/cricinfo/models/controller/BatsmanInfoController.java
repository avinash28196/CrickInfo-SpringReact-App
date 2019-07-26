package com.cricinfo.models.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cricinfo.models.BattingInfo;
import com.cricinfo.repository.BattingInfoRepository;

@RestController
public class BatsmanInfoController {

	@Autowired
	private BattingInfoRepository battingInfoRepository;
	
	@GetMapping("Api/Batsman/{name}")
	public Optional<BattingInfo> getBatsmanInfo(@PathVariable String name, Pageable pageable){
		return battingInfoRepository.findByName(name);
	}
	
	@GetMapping("Api/HighestRuns")
	public Page<BattingInfo> getHighestRunScorrer(Pageable pageable, String runScored){
		return battingInfoRepository.findAll(pageable);
	}
	

}

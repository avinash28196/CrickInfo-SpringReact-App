package com.cricinfo.models.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import com.cricinfo.models.PlayerInfo;
import com.cricinfo.repository.PlayerInfoRepository;

@RestController
public class PlayerInfoController {

	@Autowired
	private PlayerInfoRepository playerInfoRepository;
	
	@GetMapping("/Api/Players")
	public Page<PlayerInfo> getAllPlayer(Pageable pageable){
		return playerInfoRepository.findAll(pageable);
	}
	
	@GetMapping("/Api/Player/{name}")
	public Optional<PlayerInfo> getPlayerInfoByName(@PathVariable String name, Pageable pageable){
		return playerInfoRepository.findByName(name);
	}
	
	@GetMapping("Api/Team/{name}")
	public Page<PlayerInfo> getTeamInfo(@PathVariable String name, Pageable pageable){
		return playerInfoRepository.findByTeam(name, pageable);
	}
	
	
	
}

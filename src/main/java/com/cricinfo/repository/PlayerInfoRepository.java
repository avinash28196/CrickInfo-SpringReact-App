package com.cricinfo.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


import com.cricinfo.models.PlayerInfo;


@Repository
public interface PlayerInfoRepository extends PagingAndSortingRepository<PlayerInfo, Integer>{

	Optional<PlayerInfo> findByName(String name);

	Page<PlayerInfo> findByTeam(String name, Pageable pageable);

	
}

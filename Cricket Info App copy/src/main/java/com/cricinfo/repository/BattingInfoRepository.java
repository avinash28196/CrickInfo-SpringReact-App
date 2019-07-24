package com.cricinfo.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cricinfo.models.BattingInfo;
import com.cricinfo.models.PlayerInfo;

@Repository
public interface BattingInfoRepository extends PagingAndSortingRepository<BattingInfo, String>{

	Optional<BattingInfo> findByName(String name);
	Page<BattingInfo> findByRunScored(Pageable pageable, String runScored);
	Page<BattingInfo> findAll(Pageable pageable);

}

package com.cricinfo.repository;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cricinfo.models.BowlingInfo;

@Repository
public interface BowlingInfoRepository extends PagingAndSortingRepository<BowlingInfo, String>{

	Optional<BowlingInfo> findByName(String name);

}

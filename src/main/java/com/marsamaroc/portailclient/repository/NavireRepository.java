package com.marsamaroc.portailclient.repository;

import com.marsamaroc.portailclient.model.Navire;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NavireRepository extends MongoRepository<Navire, String> {
}

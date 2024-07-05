package com.marsamaroc.portailclient.repository;

import com.marsamaroc.portailclient.model.Parc;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ParcRepository extends MongoRepository<Parc, String> {
}

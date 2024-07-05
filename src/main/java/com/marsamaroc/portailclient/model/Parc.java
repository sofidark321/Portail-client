package com.marsamaroc.portailclient.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "parc")
public class Parc {
    @Id
    private String id;
    private String name;
    private String location;
    private int capacity;
}

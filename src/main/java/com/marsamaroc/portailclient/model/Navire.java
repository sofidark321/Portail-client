package com.marsamaroc.portailclient.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "navire")
public class Navire {
    @Id
    private String id;
    private String name;
    private String type;
    private String owner;
    private int capacity;
}

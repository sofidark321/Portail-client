package com.marsamaroc.portailclient.controller;

import com.marsamaroc.portailclient.model.Parc;
import com.marsamaroc.portailclient.repository.ParcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/parcs")
public class ParcController {

    @Autowired
    private ParcRepository parcRepository;

    @GetMapping
    public List<Parc> getAllParcs() {
        return parcRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Parc> getParcById(@PathVariable String id) {
        Optional<Parc> parc = parcRepository.findById(id);
        return parc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Parc createParc(@RequestBody Parc parc) {
        return parcRepository.save(parc);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Parc> updateParc(@PathVariable String id, @RequestBody Parc parcDetails) {
        Optional<Parc> optionalParc = parcRepository.findById(id);
        if (optionalParc.isPresent()) {
            Parc parc = optionalParc.get();
            parc.setName(parcDetails.getName());
            parc.setLocation(parcDetails.getLocation());
            // Mettez à jour les autres champs si nécessaire
            Parc updatedParc = parcRepository.save(parc);
            return ResponseEntity.ok(updatedParc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParc(@PathVariable String id) {
        if (parcRepository.existsById(id)) {
            parcRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

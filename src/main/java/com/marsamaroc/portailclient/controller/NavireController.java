package com.marsamaroc.portailclient.controller;

import com.marsamaroc.portailclient.model.Navire;
import com.marsamaroc.portailclient.repository.NavireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/navires")
public class NavireController {

    @Autowired
    private NavireRepository navireRepository;

    @GetMapping
    public List<Navire> getAllNavires() {
        return navireRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Navire> getNavireById(@PathVariable String id) {
        Optional<Navire> navire = navireRepository.findById(id);
        return navire.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Navire createNavire(@RequestBody Navire navire) {
        return navireRepository.save(navire);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Navire> updateNavire(@PathVariable String id, @RequestBody Navire navireDetails) {
        Optional<Navire> optionalNavire = navireRepository.findById(id);
        if (optionalNavire.isPresent()) {
            Navire navire = optionalNavire.get();
            navire.setName(navireDetails.getName());
            navire.setType(navireDetails.getType());
            // Mettez à jour les autres champs si nécessaire
            Navire updatedNavire = navireRepository.save(navire);
            return ResponseEntity.ok(updatedNavire);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNavire(@PathVariable String id) {
        if (navireRepository.existsById(id)) {
            navireRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

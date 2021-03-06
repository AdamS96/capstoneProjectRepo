package com.example.drivers.controller;


import com.example.drivers.model.Driver;
import com.example.drivers.service.DriverService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.nio.file.Path;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class DriverController {


    private final DriverService service;

    public DriverController(DriverService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/drivers")
    List<Driver> getAllDrivers() {
        return service.getAllDrivers();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/drivers")
    Driver save(@RequestBody Driver driver) {
        return service.save(driver);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/drivers/id")
    Optional<Driver> getSingleDriver(@RequestParam Long id) {

        return service.getSingleDriver(id);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/drivers/id")
    void deleteSingleDriver(@RequestParam Long id) {

        service.deleteSingleDriver(id);

    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/drivers/")
    void updateContactNumber(@RequestParam Long id, @RequestParam String contactNumber) {

        service.updateNumber(id, contactNumber);
    }


}

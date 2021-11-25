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
    public static final String ID_NOT_FOUND_ERROR_MSG = "Driver does not exist with ID: ";

    public DriverController(DriverService service){
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/drivers")
    List<Driver> getAllDrivers(){
        return service.getAllDrivers();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/drivers")
    Driver save(@RequestBody Driver driver){
        return service.save(driver);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/drivers/id")
    Optional<Driver> getSingleDriver(@RequestParam Long id) {
        try {
            return service.getSingleDriver(id);
        } catch (NoSuchElementException noSuchElementException) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, ID_NOT_FOUND_ERROR_MSG + id, noSuchElementException);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/drivers/id")
    void deleteSingleDriver(@RequestParam Long id) {
        try {
            service.deleteSingleDriver(id);
        }
        catch (NoSuchElementException noSuchElementException) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, ID_NOT_FOUND_ERROR_MSG + id, noSuchElementException);
        }
        service.deleteSingleDriver(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/drivers/")
    void updateContactNumber(@RequestParam Long id, @RequestParam String contactNumber) {
        try {
            service.updateNumber(id, contactNumber);
        }catch (NoSuchElementException noSuchElementException) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, ID_NOT_FOUND_ERROR_MSG + id, noSuchElementException);
        }

    }



}

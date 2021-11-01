package com.example.drivers.service;


import com.example.drivers.model.Driver;
import com.example.drivers.repository.DriverRepository;
import com.example.drivers.service.businessLogic.QuoteAmountCalculator;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    private final DriverRepository repository;
    private final QuoteAmountCalculator quoteAmountCalculator;

    public DriverService(DriverRepository repository, QuoteAmountCalculator quoteAmountCalculator){
        this.repository = repository;
        this.quoteAmountCalculator = quoteAmountCalculator;
    }

    public List<Driver> getAllDrivers(){
        return repository.findAll();
    }

    public Driver save(Driver driver){
        quoteAmountCalculator.calculateInsuranceQuote(driver);
        return repository.save(driver);
    }

    public Optional<Driver> getSingleDriver(Long id) {
        return repository.findById(id);
    }

    public void deleteSingleDriver(Long id) {
        repository.deleteById(id);
    }

    public Optional<Driver> updateNumber(Long id, String contactNumber) {

        return repository.findById(id)
                .map(recordForUpdating -> {
                    recordForUpdating.setContactNumber(contactNumber);
                    return repository.save(recordForUpdating);
                });
    }
}

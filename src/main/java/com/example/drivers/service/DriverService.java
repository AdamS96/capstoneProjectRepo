package com.example.drivers.service;


import com.example.drivers.model.Driver;
import com.example.drivers.repository.DriverRepository;
import com.example.drivers.service.businessLogic.DisplayDrivers;
import com.example.drivers.service.businessLogic.QuoteAmountCalculator;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class DriverService {

    private final DriverRepository driverRepository;
    private final QuoteAmountCalculator quoteAmountCalculator;
    List<Driver> driverList = new ArrayList<>();

    public DriverService(DriverRepository driverRepository, QuoteAmountCalculator quoteAmountCalculator) {
        this.driverRepository = driverRepository;
        this.quoteAmountCalculator = quoteAmountCalculator;
    }

    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Driver save(Driver driver) {
        quoteAmountCalculator.calculateInsuranceQuote(driver);
        driverList.add(driver);
        DisplayDrivers.displayDrivers(driverList);
        return driverRepository.save(driver);
    }

    public Optional<Driver> getSingleDriver(Long id) {
        return driverRepository.findById(id);
    }

    public void deleteSingleDriver(Long id) {
        driverRepository.deleteById(id);
    }

    public Driver updateNumber(Long id, String contactNumber) {

        return driverRepository.findById(id)
                .map(recordForUpdating -> {
                    recordForUpdating.setContactNumber(contactNumber);
                    return driverRepository.save(recordForUpdating);
                }).orElseThrow(() -> new NoSuchElementException("No such driver"));
    }


}

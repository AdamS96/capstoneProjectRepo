package com.example.drivers.service.businessLogic;

import com.example.drivers.model.Driver;

import java.util.List;

public class DisplayDrivers {

    public static void displayDrivers(List<Driver> driverList){
        System.out.printf("%n%-10.10s %-15.15s %-15.15s %-20.20s %-25.25s %-25.25s %-20.20s %-15.15s %-15.15s %-15.15s %-20.20s %-15.15s %-25.25s %-15.15s %-20.20s %-20.20s %n",
                "Prefix", "First Name", "Last Name", "Telephone Number", "Address Line 1", "Address Line 2",
                "City", "Postcode", "Vehicle Type", "Engine Size", "Additional Drivers", "Commercial Use",
                "Outside of State Use", "Current Value", "Date Registered", "Final Quote Amount");

        for(Driver driver : driverList){

         System.out.printf("%-10.10s %-15.15s %-15.15s %-20.20s %-25.25s %-25.25s %-20.20s %-15.15s %-15.15s %-15.15s %-20.20s %-15.15s %-25.25s %-15.15s %-20.20s %.2f %n",
                driver.getPrefix(), driver.getFirstName(), driver.getLastName(), driver.getContactNumber(),
                driver.getAddressLine1(), driver.getAddressLine2(), driver.getCity(), driver.getPostcode(),
                driver.getVehicleType(), driver.getEngineSize(), driver.getAdditionalDrivers(),
                driver.getUsedCommercialPurposes(), driver.getUsedOutsideState(), driver.getCurrentVehicleValue(),
                driver.getDateVehicleRegistered(), driver.getQuoteAmount());
    }
}
}

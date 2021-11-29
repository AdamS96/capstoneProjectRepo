package com.example.drivers.service.businessLogic;

public class VehicleValueFactor {

    public static double calculateVehicleValueFactor(String vehicleValue) {

        double vehicleValueFactor = 0.0;
        int vehicleValueAsInt = Integer.parseInt(vehicleValue);

        try {
            if (vehicleValueAsInt > 0 && vehicleValueAsInt <= 5000) {
                return vehicleValueFactor = 1.0;
            } else {
                return vehicleValueFactor = 1.2;
            }
        } catch (NumberFormatException numberFormatException) {
            throw new NumberFormatException("String cannot be converted to int");
        }
    }
}

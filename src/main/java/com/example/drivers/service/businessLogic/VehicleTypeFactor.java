package com.example.drivers.service.businessLogic;

public class VehicleTypeFactor {

    public static double calculateTypeFactor(String vehicleType){

        double typeFactor = 0.0;

        if (vehicleType.equalsIgnoreCase("Cabriolet")){
            return typeFactor = 1.3;
        } else if (vehicleType.equalsIgnoreCase("Coupe")){
            return typeFactor = 1.4;
        } else if (vehicleType.equalsIgnoreCase("Estate")){
            return typeFactor = 1.5;
        } else if (vehicleType.equalsIgnoreCase("Hatchback")){
            return typeFactor = 1.6;
        } else if (vehicleType.equalsIgnoreCase("Other")){
            return typeFactor = 1.7;
        } else {
            throw new IllegalArgumentException("Invalid vehicle type");
        }
    }
}

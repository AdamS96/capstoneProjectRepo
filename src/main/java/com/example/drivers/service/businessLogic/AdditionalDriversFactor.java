package com.example.drivers.service.businessLogic;

public class AdditionalDriversFactor {

    public static double calculateAdditionalDriversFactor (String additionalDrivers){

        double additionalDriversFactor = 0.0;
        int additionalDriversAsInt = Integer.parseInt(additionalDrivers);

        try {
            if (additionalDriversAsInt >=0 && additionalDriversAsInt < 2){
                return additionalDriversFactor = 1.1;
            } else {
                return additionalDriversFactor = 1.2;
            }
        } catch (NumberFormatException numberFormatException){
            throw new NumberFormatException("String cannot be converted to int");
        }
    }

}

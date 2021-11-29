package com.example.drivers.service.businessLogic;

public class AdditionalDriversFactor {

    public static double calculateAdditionalDriversFactor(String additionalDrivers) {

        double additionalDriversFactor = 0.0;
        int additionalDriversAsInt = Integer.parseInt(additionalDrivers);


        if (additionalDriversAsInt >= 0 && additionalDriversAsInt < 2) {
            return additionalDriversFactor = 1.1;
        } else if (additionalDriversAsInt >= 2 && additionalDriversAsInt <= 4) {
            return 1.2;
        } else {
            throw new IllegalArgumentException("Additional drivers must be between 0 and 4 (inclusive)");
        }

    }

}

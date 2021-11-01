package com.example.drivers.service.businessLogic;

public class OutsideStateFactor {

    public static double calculateOutsideStateFactor (String outsideState){

        double outsideStateFactor = 0.0;

        if (outsideState.equalsIgnoreCase("Yes")){
            return outsideStateFactor = 1.1;
        } else if (outsideState.equalsIgnoreCase("No")){
            return outsideStateFactor = 1.0;
        } else {
            throw new IllegalArgumentException("Invalid entry");
        }
    }
}

package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class VehicleValueFactorTest {

    String validVehicleValueLower, validVehicleValueMiddle, validVehicleValueUpper, invalidVehicleValue;
    VehicleValueFactor vehicleValueFactor;

    @BeforeEach
    void setUp() throws NumberFormatException {
        validVehicleValueLower = "1";
        validVehicleValueMiddle = "5000";
        validVehicleValueUpper = "50000";
        invalidVehicleValue = "invalid";

        vehicleValueFactor = new VehicleValueFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateVehicleValueFactorValidLower() {

        double expectedResult = 1.0;
        double actualResult = vehicleValueFactor.calculateVehicleValueFactor(validVehicleValueLower);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateVehicleValueFactorValidMiddle() {

        double expectedResult = 1.0;
        double actualResult = vehicleValueFactor.calculateVehicleValueFactor(validVehicleValueMiddle);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateVehicleValueFactorValidUpper() {

        double expectedResult = 1.2;
        double actualResult = vehicleValueFactor.calculateVehicleValueFactor(validVehicleValueUpper);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateVehicleValueFactorInvalid() {
        NumberFormatException exception = assertThrows(NumberFormatException.class,
                () -> {vehicleValueFactor.calculateVehicleValueFactor(invalidVehicleValue);});
    }
}
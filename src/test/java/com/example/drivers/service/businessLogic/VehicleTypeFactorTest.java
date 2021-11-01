package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class VehicleTypeFactorTest {

    String validCarType, invalidCarType;
    VehicleTypeFactor vehicleTypeFactor;

    @BeforeEach
    void setUp() throws IllegalArgumentException {
        validCarType = "Hatchback";
        invalidCarType = "Invalid";
        vehicleTypeFactor = new VehicleTypeFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateTypeFactorValid() {

        double expectedResult = 1.6;
        double actualResult = vehicleTypeFactor.calculateTypeFactor(validCarType);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateTypeFactorInvalid() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> {vehicleTypeFactor.calculateTypeFactor(invalidCarType);});
    }
}
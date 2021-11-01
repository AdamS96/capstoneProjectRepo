package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AdditionalDriversFactorTest {

    String validAdditionalDriversLower, validAdditionalDriversUpper, invalidAdditionalDrivers;
    AdditionalDriversFactor additionalDriversFactor;

    @BeforeEach
    void setUp() throws NumberFormatException {
        validAdditionalDriversLower = "1";
        validAdditionalDriversUpper = "2";
        invalidAdditionalDrivers = "invalid";

        additionalDriversFactor = new AdditionalDriversFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateAdditionalDriversFactorValidLower() {

        double expectedResult = 1.1;
        double actualResult = additionalDriversFactor.calculateAdditionalDriversFactor(validAdditionalDriversLower);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateAdditionalDriversFactorValidUpper() {

        double expectedResult = 1.2;
        double actualResult = additionalDriversFactor.calculateAdditionalDriversFactor(validAdditionalDriversUpper);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateAdditionalDriversFactorInvalid() {
        NumberFormatException exception = assertThrows(NumberFormatException.class,
                () -> {additionalDriversFactor.calculateAdditionalDriversFactor(invalidAdditionalDrivers);});
    }
}
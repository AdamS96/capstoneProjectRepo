package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CommercialUseFactorTest {
    String validCommercialUseYes, validCommercialUseNo, invalidCommercialUse;
    CommercialUseFactor commercialUseFactor;

    @BeforeEach
    void setUp() throws IllegalArgumentException{

        validCommercialUseYes = "Yes";
        validCommercialUseNo = "No";
        invalidCommercialUse = "Invalid";

        commercialUseFactor = new CommercialUseFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateCommercialUseFactorYes() {

        double expectedResult = 1.1;
        double actualResult = commercialUseFactor.calculateCommercialUseFactor(validCommercialUseYes);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateCommercialUseFactorNo() {

        double expectedResult = 1.0;
        double actualResult = commercialUseFactor.calculateCommercialUseFactor(validCommercialUseNo);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateCommercialUseFactorInvalid() {

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> {commercialUseFactor.calculateCommercialUseFactor(invalidCommercialUse);});
    }
}
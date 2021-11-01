package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OutsideStateFactorTest {

    String validOutsideStateYes, validOutsideStateNo, invalidOutsideState;
    OutsideStateFactor outsideStateFactor;

    @BeforeEach
    void setUp() throws IllegalArgumentException{

        validOutsideStateYes = "Yes";
        validOutsideStateNo = "No";
        invalidOutsideState = "Invalid";

        outsideStateFactor = new OutsideStateFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateOutsideStateFactorYes() {

        double expectedResult = 1.1;
        double actualResult = outsideStateFactor.calculateOutsideStateFactor(validOutsideStateYes);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateOutsideStateFactorNo() {

        double expectedResult = 1.0;
        double actualResult = outsideStateFactor.calculateOutsideStateFactor(validOutsideStateNo);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateOutsideStateFactorInvalid() {

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> {outsideStateFactor.calculateOutsideStateFactor(invalidOutsideState);});
    }
}
package com.example.drivers.service.businessLogic;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EngineSizeFactorTest {

    String engineSizeValid, engineSizeInvalid;
    EngineSizeFactor engineSizeFactor;

    @BeforeEach
    void setUp() throws IllegalArgumentException{
        engineSizeValid = "1000";
        engineSizeInvalid = "invalid";
        engineSizeFactor = new EngineSizeFactor();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void calculateEngineSizeFactorValid() {
        double expectedResult = 1.0;
        double actualResult = engineSizeFactor.calculateEngineSizeFactor(engineSizeValid);

        assertEquals(expectedResult, actualResult, 0.1);
    }

    @Test
    void calculateEngineSizeFactorInvalid() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () ->
        {engineSizeFactor.calculateEngineSizeFactor(engineSizeInvalid);});
    }
}
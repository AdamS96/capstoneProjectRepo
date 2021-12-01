package com.example.drivers.service.businessLogic;

import com.example.drivers.model.Driver;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class QuoteAmountCalculatorTest {

    QuoteAmountCalculator quoteAmountCalculator;
    Driver driver;
    Driver driver2;
    Driver driver3;

    @BeforeEach
    void setUp() {

        quoteAmountCalculator = new QuoteAmountCalculator();
        driver = new Driver(3L, "prefix", "firstName", "lastName", "telephone", "address1", "address2",
                "city", "postcode","Hatchback", "1000", "1", "Yes", "No", "date",
                "10000", 0.0 );
        driver2 = new Driver(4L, "prefix", "firstName", "lastName", "telephone", "address1", "address2",
                "city", "postcode","Cabriolet", "3000", "1", "No", "No", "date",
                "15000", 0.0 );
        driver3 = new Driver(5L, "prefix", "firstName", "lastName", "telephone", "address1", "address2",
                "city", "postcode","Hatchback", "1600", "3", "Yes", "Yes", "date",
                "5000", 0.0 );
    }

    @AfterEach
    void tearDown() {
    }



    @Test
    void calculateInsuranceQuote1(){

        double expectedResult = 232.32;

        quoteAmountCalculator.calculateInsuranceQuote(driver);

        assertEquals(expectedResult, driver.getQuoteAmount(), 0.2);
    }

    @Test
    void calculateInsuranceQuote2(){

        double expectedResult = 514.80;

        quoteAmountCalculator.calculateInsuranceQuote(driver2);

        assertEquals(expectedResult, driver2.getQuoteAmount(), 0.2);
    }
    @Test
    void calculateInsuranceQuote3(){

        double expectedResult = 371.712;

        quoteAmountCalculator.calculateInsuranceQuote(driver3);

        assertEquals(expectedResult, driver3.getQuoteAmount(), 0.3);
    }
}
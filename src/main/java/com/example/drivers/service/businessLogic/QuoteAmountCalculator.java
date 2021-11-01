package com.example.drivers.service.businessLogic;

import com.example.drivers.model.Driver;
import org.springframework.stereotype.Service;

import static com.example.drivers.service.businessLogic.AdditionalDriversFactor.calculateAdditionalDriversFactor;
import static com.example.drivers.service.businessLogic.CommercialUseFactor.calculateCommercialUseFactor;
import static com.example.drivers.service.businessLogic.EngineSizeFactor.calculateEngineSizeFactor;
import static com.example.drivers.service.businessLogic.OutsideStateFactor.calculateOutsideStateFactor;
import static com.example.drivers.service.businessLogic.VehicleTypeFactor.calculateTypeFactor;
import static com.example.drivers.service.businessLogic.VehicleValueFactor.calculateVehicleValueFactor;

@Service
public class QuoteAmountCalculator {

    public void calculateInsuranceQuote(Driver driver){

        double typeFactor = calculateTypeFactor(driver.getVehicleType());
        double engineSizeFactor = calculateEngineSizeFactor(driver.getEngineSize());
        double additionalDriversFactor = calculateAdditionalDriversFactor(driver.getAdditionalDrivers());
        double commercialUseFactor = calculateCommercialUseFactor(driver.getUsedCommercialPurposes());
        double outsideStateFactor = calculateOutsideStateFactor(driver.getUsedOutsideState());
        double vehicleValueFactor = calculateVehicleValueFactor(driver.getCurrentVehicleValue());

        double quoteAmount = (100 * typeFactor * engineSizeFactor * additionalDriversFactor
                * commercialUseFactor * outsideStateFactor * vehicleValueFactor);

        driver.setQuoteAmount(quoteAmount);
    }
}

package com.example.drivers.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Driver(Long id, String prefix, String firstName, String lastName, String contactNumber, String addressLine1,String addressLine2, String city, String postcode,
                  String vehicleType, String engineSize, String additionalDrivers, String usedCommercialPurposes, String usedOutsideState, String dateVehicleRegistered,
                  String currentVehicleValue, double quoteAmount){

        this.id = id;
        this.prefix = prefix;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.postcode = postcode;
        this.vehicleType = vehicleType;
        this.engineSize = engineSize;
        this.additionalDrivers = additionalDrivers;
        this.usedCommercialPurposes = usedCommercialPurposes;
        this.usedOutsideState = usedOutsideState;
        this.dateVehicleRegistered = dateVehicleRegistered;
        this.currentVehicleValue = currentVehicleValue;
        this.quoteAmount = quoteAmount;

    }
    @Column
    private String prefix;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String postcode;
    private String vehicleType;
    private String engineSize;
    private String additionalDrivers;
    private String usedCommercialPurposes;
    private String usedOutsideState;
    private String dateVehicleRegistered;
    private String currentVehicleValue;
    private double quoteAmount;

    public Driver() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(String engineSize) {
        this.engineSize = engineSize;
    }

    public String getAdditionalDrivers() {
        return additionalDrivers;
    }

    public void setAdditionalDrivers(String additionalDrivers) {
        this.additionalDrivers = additionalDrivers;
    }

    public String getUsedCommercialPurposes() {
        return usedCommercialPurposes;
    }

    public void setUsedCommercialPurposes(String usedCommercialPurposes) {
        this.usedCommercialPurposes = usedCommercialPurposes;
    }

    public String getUsedOutsideState() {
        return usedOutsideState;
    }

    public void setUsedOutsideState(String usedOutsideState) {
        this.usedOutsideState = usedOutsideState;
    }

    public String getDateVehicleRegistered() {
        return dateVehicleRegistered;
    }

    public void setDateVehicleRegistered(String dateVehicleRegistered) {
        this.dateVehicleRegistered = dateVehicleRegistered;
    }

    public String getCurrentVehicleValue() {
        return currentVehicleValue;
    }

    public void setCurrentVehicleValue(String currentVehicleValue) {
        this.currentVehicleValue = currentVehicleValue;
    }

    public double getQuoteAmount() {
        return quoteAmount;
    }

    public void setQuoteAmount(double quoteAmount) {
        this.quoteAmount = quoteAmount;
    }
}

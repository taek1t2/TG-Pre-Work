import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}

displayStaffStatus();


//import variables that are declared, use original syntax that describes the variable name.
//ex) import { specialty, isVegetarian } from 'menu';

'use strict';

// const Vehicle = require('../vehicle-constructor.js');

// const Vehicle = require('../vehicle-class.js');
const Vehicle = require('../vehicle-factory.js');


describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });


  describe('Helicopter', () => {

    let helicopter = new Vehicle.Helicopter('foo');

    it('has 0 wheels', () => {
      expect(helicopter.wheels).toEqual(0);
    });

    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can travel', () => {
      expect(helicopter.travel()).toBeTruthy();
    });

  });

  describe('Airplane', () => {

    let airplane = new Vehicle.Helicopter('foo');

    it('has 2 wheels', () => {
      expect(airplane.wheels).toEqual(0);
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can travel', () => {
      expect(airplane.travel()).toBeTruthy();
    });

    it('has wings', () => {
      expect(airplane.travel()).toBeTruthy();
    });

  });

  describe('Crab', () => {

    let crab = new Vehicle.Crab('foo');

    it('has a habitat', () => {
      expect(crab.habitat).toBeTruthy();
    });

    it('can lives in water', () => {
      expect(crab.water()).toBeTruthy();
    });

  });

  describe('Whale', () => {

    let whale = new Vehicle.Whale('foo');

    it('has a habitat', () => {
      expect(whale.habitat).toBeTruthy();
    });

    it('can lives in water', () => {
      expect(whale.water()).toBeTruthy();
    });

  });

});

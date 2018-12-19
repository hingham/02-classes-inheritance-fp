'use strict';

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }

}

class Car extends Vehicle {
  constructor(name){
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {

  constructor(name){
    super(name, 2);
  }
  wheelie(){
    return 'Whee!';
  }
}


class FlyingVehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  
  fly() {
    return 'Fly like a bird!';
  }
  
  travel() {
    return 'Travels far and wide!';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name){
    super(name, 3);
  }
  wings(){
    return 'I have wings';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name){
    super(name, 0);
  }
}



class SeaCreatures {
  constructor(name, habitat){
    this.name = name;
    this.habitat = habitat;
  }
  water(){
    return 'find me in the water';
  }
   
}


class Crab extends SeaCreatures{
  constructor(name){
    super(name, 'tidepool');
  }
}

class Whale extends SeaCreatures{
  constructor(name){
    super(name, 'ocean');
  }
}


let myCar = new Crab('miles');
let myMotor = new Motorcycle('harly');

module.exports = {Car, Motorcycle, Airplane, Helicopter, Crab, Whale};

console.log(myCar);


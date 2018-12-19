'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};


const FlyingVehicle = function(name, wheels){
  this.name = name;
  this.wheels = wheels;
};

FlyingVehicle.prototype.fly = () =>{
  return 'Fly like a bird!';
};


FlyingVehicle.prototype.travel = () =>{
  return 'Travels far and wide!';
};

const Helicopter = function(name){
  FlyingVehicle.call(this, name, 0);
};

Helicopter.prototype = new FlyingVehicle; 


const Airplane = function(name){
  FlyingVehicle.call(this, name, 3);
};

Airplane.prototype = new FlyingVehicle; 


Airplane.prototype.wings = () =>{
  return 'I have wings';
};


const SeaCreatures = function(name, habitat){
  this.name = name;
  this.habitat = habitat;
};

SeaCreatures.prototype.water = () =>{
  return 'find me in the water';
}

const Crab = function(name){
  SeaCreatures.call(this, name, 'tidepool');
};

Crab.prototype = new SeaCreatures;

const Whale = function(name){
  SeaCreatures.call(this, name, 'Ocean');
};

Whale.prototype = new SeaCreatures;

console.log(new Helicopter('heli').travel());
module.exports = {Car, Motorcycle, Airplane, Helicopter, Crab, Whale};

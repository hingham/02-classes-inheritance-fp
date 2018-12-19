'use strict';

const Vehicle = () => ({
  drive(){
    return 'it can drive';
  },
  stop(){
    return 'stopping';
  },

});

function Car(name){
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4}
  );

  return car;
}

function Motorcycle(name){
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}

  );

  function wheelie(){
    return 'Wheee!';
  }
  
  return motorcycle;
}

const FlyingVehicle = () =>({
  fly(){
    return 'i can fly';
  },
  travel() {
    return 'I can travel';
  },
});

function Airplane(name){
  let airplane = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 3},
    {wings}
  );

  function wings(){
    return 'I have wings';
  }
  return airplane;
}


function Helicopter(name){
  let helicopter = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 0}
  );
  return helicopter;
}


const SeaCreatures = () =>({
  water(){
    return 'i live in water';
  },
});

function Crab(name){
  let crab = Object.assign(
    {},
    SeaCreatures(),
    {name},
    {habitat: 'tidepool'}
  );

  return crab;
}

function Whale(name){
  let whale = Object.assign(
    {},
    SeaCreatures(),
    {name},
    {habitat: 'ocean'}
  );
  
  return whale;
}




let myCar = new Car('me');
console.log(myCar);
module.exports = {Car, Motorcycle, Airplane, Helicopter, Crab, Whale};



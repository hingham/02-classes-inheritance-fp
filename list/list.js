'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }


  //Remove an item from the front of the array and return it's value
  shift(){
    let returnValue = this.data[0];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  //unshift() adds one or more elements to the beginnin gof an array and returns the new length of the array

  unshift(arr){
    let temp = this.data;
    let myArr = [];

    for(let i = 0; i< arr.length; i++){
      myArr[i]=arr[i];
    }
    for( let i = 0; i< this.length; i++){
      myArr[i+arr.length] = this.data[i]; 
    }
    for(let i = 0; i<myArr.length; i++){
      this.data[i] = myArr[i];
    }
    let returnValue = myArr.length;
    return returnValue;
  }

  //splice() changes the contents of an array by removing or replacing existing elements, or adding new elements
  splice(idx, rm, item){
    let myTemp = this.data;
    this.data = {};

    console.log('what is this ', this);//this has a stored length of 4;

    if(arguments.length===1){
      for(let i = 0; i<myTemp.length-idx; i++){
        this.data[i] = myTemp[i];
      }
    }
  
    if(arguments.length===2){

      for(let i = 0; i<this.length-rm; i++){
        if(idx === i){
          console.log('looking at this ', this.push('z'));
          this.push = myTemp[i+rm];
          console.log(this.data);
        }
        else{
          this.data[i]=myTemp[i];
          console.log(this.data);
        }
      }
    }

    console.log('if only one arg ', this.data);
    console.log('arguments ' + arguments.length);

    if(arguments.length > 2){
      for(let i = 0; i< this.length-rm; i++){
        console.log('in for loop', i, 'idx ', idx);
        if(idx ===i){
          for (let j = 0; j<arguments.length -2; j++){
            this.data[j] = arguments[j+2];
          }
        }

        else{
          this.data[i]=myTemp[i];
          console.log(this.data);
        }

      }
    }

    console.log(this.data);
  }
}

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('d');
stuff.push('e');


// console.log(stuff);
// console.log('stuff.length' + stuff.length);
console.log('my splice ' + stuff.splice(2, 1));
console.log(stuff.data);

module.exports = List;

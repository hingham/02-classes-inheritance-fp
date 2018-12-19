'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {


  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();

    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  //pop method
  it('pops off the last item off the array', () =>{
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
  });

  it('returns the last item of the array', () =>{
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');
    let lastItem = stuff.pop();
    expect(lastItem).toEqual(stuff[stuff.length]);
  });


  //shift method
  it('returns the first element of an array', () => {
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');
    let firstItem = stuff.shift();
    console.log(stuff[0]);
    expect(firstItem).toEqual(stuff.data[0]);
  });

  it('reduces the length of the array by 1', () => {
    let stuff = new List();

    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
  });

  //unshift method
  it('adds one or more elements to the beginning of an array', ()=> {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    stuff.unshift(['c', 'd']);
    expect(stuff.data).toEqual({'0': 'c','1': 'd', '2': 'a','3': 'b'});

  });

  it('it returns the length of the new array', () =>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    expect(stuff.unshift(['c', 'd'])).toEqual(4);

  });

  //splice method
  it('changes the contents of the array', () =>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    let newStuff = stuff.splice(1, 1, 'new');
    expect(newStuff).toNotEqual(stuff);
  });

  it('removes exisiting elements', () =>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    stuff.splice(1, 1, 'new');
    expect(stuff).toEqual({'0': 'a', '1': 'new'});
  });

  it('adds elements', () =>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    stuff.splice(1, 0, 'new');
    expect(stuff).toEqual({'0': 'a', '1': 'new', '2': 'b'});
  });

});

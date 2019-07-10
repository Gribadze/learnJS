"use strict";

function inherit(Parent, childObj) {
  function Child() {
    Parent.apply(this, arguments);
    if( childObj["constructor"] ) {
      childObj["constructor"].apply(this, arguments);
    }
  }

  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;

  for(var key in childObj) {
    if( key !== "constructor" ) {
      Child.prototype[key] = childObj[key];
    }
  }

  return Child;
}

function B() {
  this.counter = 0;
}

const F = inherit(B, {
  constructor: function() {
    this.name = "foo";
  },
  getCounter: function() {
    return this.counter;
  },
});

const f = new F();
console.log( f.getCounter() );
console.log( f.name );
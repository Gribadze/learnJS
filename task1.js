"use strict";

function EventEmitter() {
  this._callbacks = {};
}

EventEmitter.prototype.on = function(eventName, func) {
  if( !this._callbacks[eventName] ) {
      this._callbacks[eventName] = [];
  }
  this._callbacks[eventName].push(func);

  let i = this._callbacks[eventName].length - 1;
  return function() {
    this._callbacks[eventName].splice(i, 1);
  }
}

EventEmitter.prototype.emit = function(eventName) {
  if( !this._callbacks[eventName] ) return;
  this._callbacks[eventName].forEach( function(item) {
    item();
  });
}

const ee = new EventEmitter();

ee.on("keydown", function() {
  alert("button A is pressed");
});

ee.deleteButtonB = ee.on("keydown", function() {
  alert("button B is pressed");
});

ee.on("keydown", function() {
  alert("button C is pressed");
});

ee.emit("keydown");

ee.deleteButtonB();

ee.emit("keydown");




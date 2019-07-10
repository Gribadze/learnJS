"use strict";

function isPrimit(value) {
  if (value === null) {
    return true;
  }
  return (typeof value !== "object");
}

var obj = {
  name: "Vasya",
  address: {
    country: "Belarus",
    city: "Minsk",
  },
  phone: null,
  friends: [ "Petya", "Kolya", "Sveta" ]
}

function filterPrimit(obj) {
  return Object.keys(obj).reduce( function(prevVal, current) {
    if( isPrimit(obj[current]) ) {
      prevVal.push(obj[current]);
    }

    else {
      prevVal = prevVal.concat( filterPrimit(obj[current]) );
    }

    return prevVal;
  }, []);
}

alert( filterPrimit(obj) );
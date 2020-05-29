// Sets

function mySet() {
  // The var collection will hold the set
  var collection = [];
  // This method will check for the presence of an element an dreturn ture or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  // This method will return all the values in the set
  this.values = function () {
    return collection;
  };
  // This method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method return the size of the collection
  this.size = function () {
    return collection.length;
  };
  // this method will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (element) {
      unionSet.add(element);
    });
    secondSet.forEach(function (element) {
      unionSet.add(element);
    });
    return unionSet;
  };
  // this method will return the instersection of two sets as a new set(This one doesnt handle with the sets size)
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (element) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set(This one doesnt handle with the sets size)
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (element) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

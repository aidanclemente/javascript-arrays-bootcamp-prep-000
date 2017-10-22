var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  addElementToBeginningOfArray = [...array, "element"];
  return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift();
  return array;
}

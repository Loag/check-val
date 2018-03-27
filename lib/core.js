// this is to check multiple values present and 

module.exports = function (item, values) { // item contains 
  for (let key of Object.keys(item)) {
    if (!(values[key]) || (item[key] === values[key] && varType(item[key]) === varType(values[key]))) continue;
    else return false;
  }
  return true;
}


function varType(obj) {
 return {}.toString
   .call(obj)
   .match(/\s([a-zA-Z]+)/)[1]
   .toLowerCase();
}

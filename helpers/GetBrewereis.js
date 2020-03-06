const Brewery = require('../classes/Brewery');

function GetBreweries(array) {
  if (!(array instanceof Array)) {
    throw new Error('getBreweries requires an array');
  }

  return array.map((item) => {
    return new Brewery(item);
  })
}

module.exports = GetBreweries;

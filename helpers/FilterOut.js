function FilterOut(list, key, value){
  return list.filter((item) => item[key] !== value);
}

module.exports = FilterOut;

function GroupBy(list, key) {
  return list.reduce(function(groupedObject, item) {
    (groupedObject[item[key]] = groupedObject[item[key]] || []).push(item);
    return groupedObject;
  }, {});
};

module.exports = GroupBy;

0-get_list_students.js
const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;

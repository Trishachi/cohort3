export const fetchFunctions = {
  getFirstName(data) {
    // console.log("In the fetch Function");
    return data[0].name;
  },
  getAllFirstNames(data) {
    let nameArray = data.map(item => {
      return item.name;
    });
    return nameArray;
  }
};

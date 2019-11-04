export const fetchFunctions = {
  url: "https://uinames.com/api/?amount=10",
  getFirstName(data) {
    // console.log("In the fetch Function");
    return data[0].name;
  },
  getAllFirstNames(data) {
    let nameArray = data.map(item => {
      return item.name;
    });
    return nameArray;
  },
  showDelayProblem() {
    console.log("One");
    setTimeout(() => {
      console.log("Two");
    }, 1 * 1000);
    console.log("Three");
  },
  async showDelaySolution() {
    try {
      console.log("One");
      const value = await // Simulate fetch
      new Promise((resolve, reject) =>
        setTimeout(() => resolve("Two"), 1 * 2000)
      );
      // Now that we have the value we can use it.
      console.log(value);
      console.log("Three");
    } catch (error) {
      console.log(error);
    }
  },
  async getUsers() {
    try {
      const response = await fetch(fetchFunctions.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
  async workWithData(done) {
    const data = await fetchFunctions.getUsers();
    console.log(fetchFunctions.getFirstName(data));
    console.log(fetchFunctions.getAllFirstNames(data));
  }
};

const me = {
  name: "Chisom",
  surname: "Okoye",
  gender: "female",
  region: "Canada"
};

const sMe = JSON.stringify(me);
console.log(me);
console.log(sMe);

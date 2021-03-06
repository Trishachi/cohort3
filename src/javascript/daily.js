// Write the function after this comment ---------------------------------

// Daily Test - 26/11/2019 - Destructuring Assignment
//Use Destructuring Assignment to Assign Variables from Objects

export function getMaxOfTmrw(forecast) {
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  return maxOfTomorrow;
}

// Daily Test - 22/11/2019 - Sorting Exercise
const sorting = {
  originReverse: arr => {
    const newArray = arr.sort((a, b) => {
      if (b.origin > a.origin) {
        return 1;
      } else {
        return -1;
      }
    });
    // console.log(newArray);
    return newArray;
  },
  namedAlphbetical: arr => {
    const newArray = arr.sort(function alphabeticalSort(a, b) {
      if (a.str > b.str) {
        return 1;
      } else if (b.str > a.str) {
        return -1;
      }
      return 0;
    });
    return newArray;
  },
  numAsc: arr => {
    const newArray = arr.sort(function(a, b) {
      return a.num - b.num;
    });
    return newArray;
  }
};

// Daily Test - 08/11/2019 - 21/11/2019 - Callback Exercise
const callBacks = {
  filterProvineDetails: arr => {
    const provObj = { age: 0, average: 0, num: 0 };
    const totalAges = arr.reduce((acc, curVal) => acc + curVal.age, 0);
    provObj["age"] = totalAges;
    const totalPeople = arr.length;
    provObj["num"] = totalPeople;
    const avgAge = Math.round((totalAges / totalPeople) * 100) / 100;
    provObj["average"] = avgAge;
    // console.log(avgAge);
    return provObj;
  },

  filterProvinces: (data, callBack) => {
    let newArr = data.filter(
      item => item.province === "BC" || item.province === "AB"
    );
    console.log(typeof callBack);
    if (typeof callBack === "function") {
      return callBack(newArr);
    }
    return newArr;
  },
  makeFullName: Arr => {
    return Arr.map(item => item.fname + " " + item.lname);
  }
};

const functions1 = {
  // Daily Test - 06/11/2019
  loopStaff1kBal: arr => {
    let balances = arr.map(item => item.balance);
    let filteredBalance = balances.filter(item => item >= 1000);
    return filteredBalance;
  },
  // Daily Test - 29/10/2019
  loopStaffTotBal: array => {
    let balances = array.map(item => item.balance);
    let totalBalance = balances.reduce(function(acc, curVal) {
      return acc + curVal;
    });
    return totalBalance;
  },
  loopStaffAvgBal: array => {
    let totalBalance = functions1.loopStaffTotBal(array);
    let avgBalance = Math.round((totalBalance / array.length) * 100) / 100;
    return avgBalance;
  },
  // Daily Test - 21/10/2019 + // Daily Test - 24/10/2019
  loopStaffMap: arr => {
    const staffEmail = arr.map(item => functions.makeEmailObj(item));
    console.log(staffEmail[1]);
    return staffEmail;
  },
  loopStaffForEach: arr1 => {
    let staffEmail = [];
    arr1.forEach(function(item) {
      var emails = functions.makeEmailObj(item);
      staffEmail.push(emails);
    });
    console.log(staffEmail[1]);
    return staffEmail;
  },
  loopStaffIn: arr => {
    let staffEmail = [];
    for (var item in arr) {
      var emails = functions.makeEmailObj(arr[item]);
      staffEmail.push(emails);
    }
    console.log(staffEmail[3]);
    return staffEmail;
  },
  loopStaffOf: arr => {
    let staffEmail = [];
    for (var item of arr) {
      var emails = functions.makeEmailObj(item);
      staffEmail.push(emails);
    }
    console.log(staffEmail[0]);
    return staffEmail;
  },
  loopStaff: arr1 => {
    let staffEmail = [];
    arr1.forEach(function(item) {
      var emails = functions.makeEmailObj(item);
      staffEmail.push(emails);
    });
    console.log(staffEmail);
    return staffEmail;
  }
};

// Daily Test - 15/10/2019  and 16/10/2019 Arrays
var contacts = [
  {
    firstName: "Chisom",
    lastName: "Okoye",
    number: "0543236543",
    likes: ["Reading", "Coding", "Swimming"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  }
];

const arrs = {
  reverseArray: arr1 => {
    let newArr = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
      newArr.push(arr1[i]);
    }
    return newArr;
  },
  countDown: num => {
    let text = "";
    let i = num;
    while (i >= 0) {
      text += i + " ";
      i--;
    }
    return text;
  },
  counter: num1 => {
    let count = "";
    let i = 0;
    do {
      count += i + " ";
      i++;
    } while (i <= num1);
    return count;
  },
  profileDetails: () => {
    let profile = "";
    for (let contact in contacts) {
      profile +=
        contacts[contact].firstName +
        " " +
        contacts[contact].lastName +
        " - " +
        contacts[contact].number +
        "\n";
      // console.log(profile);
    }
    return profile;
  },
  arraysList: arr => {
    let list = " ";
    for (const item of arr) {
      list += item + ",";
    }
    // console.log(list);
    return list;
  },
  doubleNumbers: arr2 => {
    let doubleArr = [];
    arr2.forEach(function(item) {
      item = item * 2;
      doubleArr.push(item);
    });
    return doubleArr;
  },
  sliceFruits: (arr1, start, stop) => {
    let favFruits = arr1.slice(start, stop);
    // console.log(favFruits);
    // console.log(arr1);
    return favFruits;
  },
  spliceFruits: (arr1, index, number) => {
    let cutFruits = arr1.splice(index, number);
    // console.log(arr1);
    // console.log(cutFruits);
    return cutFruits;
  },
  doubleArrays: arr2 => {
    let newArr = arr2.map(x => x * 2);
    // console.log(newArr);
    return newArr;
  },
  filterArrays: arr3 => {
    let selected = arr3.filter(name => name.length > 6);
    // console.log(selected);
    return selected;
  },
  sumArrays: arr4 => {
    let sum = arr4.reduce((acc, curVal) => acc + curVal);
    // console.log(sum);
    return sum;
  },
  cleanUp: arr5 => {
    arr5.sort((a, b) => a - b);
    // console.log(arr5);
    return arr5;
  }
};

// ------------------------------------------------------------------

export function assertEquals(p1, p2) {
  if (p1 === p2) return true;
  if (p1 !== p2) {
    console.log(
      "*** the two values are not the same:",
      "\n",
      "p1 --> " + p1,
      "\n",
      "p2--> " + p2
    );
    return false;
  }
}

// and before this comment ---

// assertEquals("a", "b");
// assertEquals("a", "a");
// assertEquals(1, 2);
// assertEquals(2, 2);
// assertEquals("2", 2);
// assertEquals("This value", "This value");

// Daily Test - 9/10/2019 & 11/10/2019

const functions = {
  makeEmailArr: name => {
    let firstname = name[0].toLowerCase();
    let lastname = name[1].toLowerCase();
    let email = `${firstname}.${lastname}@evolveu.ca`;
    // console.log(email);
    return email;
  },
  makeEmailObj: name => {
    let firstName = name.fname.toLowerCase();
    let lastName = name.lname.toLowerCase();
    let email = `${firstName}.${lastName}@evolveu.ca`;
    // console.log(email);
    return email;
  }
};

export default functions;
export { arrs, functions1, callBacks, sorting };

// Resources - https://bitsofco.de/for-in-vs-for-of/
/* for..in (Loops through the property names) is a method for iterating over "enumerable" properties of an object. It therefore applies to all objects (not only Object()s) that have these properties. */
/* for..of (Loops through the property values) is a method, introduced in ES2015, for iterating over "iterable collections". These are objects that have a [Symbol.iterator] property */

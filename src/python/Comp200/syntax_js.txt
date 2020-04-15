// define attributes / variables
// - number
// - string
// - boolean
// - array
// - dictionary / objects
// - undefined

// sample if / else

// functions
// - parameters
// - returns

// arrays
// - add to the front
// - add to the end
// - update values

// loops 
// - for
// - for/in
// - while
// - do while
// - forEach (with array and function)

// Objects / Dictionaries
// - declare object
// - lookup key to retrieve value

/* Code Starts Here */
var contacts = [
    {
        "firstName": "Chisom",
        "lastName": "Okoye",
        "number": "0543236543",
        "likes": ["Reading", "Coding", "Swimming"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
];

const functions = {    
    varType: (input) => {
       return typeof(input);
    }, 
    biggerNum: (num1, num2) => {
        if(num1 > num2) {
            return num1 + " is bigger";
        } else {
            return num2 + " is bigger";
        }
    }, 
    sumRange: (minNum, maxNum) => {
        minNum = parseInt(minNum);
        maxNum = parseInt(maxNum);
        let sum = 0;
        for(let i = minNum; i <= maxNum; i++){
            sum += i;
        }
        console.log(`total sum of numbers from ${minNum} to ${maxNum} is ${sum}`);
        return sum;
    }, 
    reverseArray: arr1 => {
        let newArr = [];
        for(let i = arr1.length-1; i >= 0; i--){
            newArr.push(arr1[i]);
        }
        return newArr;
    }, 
    updateTodo: (task, arr, replace) => {
        //if task is not in array
            let index = arr.indexOf(task);
          //add task to front of array
            if(index == -1){
                arr.unshift(task)
            } else {
                //if task in array
            //replace task with replace 
            arr[index] = replace;
            }
            console.log(arr);
            return arr;        
    }, 
    profileLookup: (name, prop) => {
        for(let i = 0; i < contacts.length; i++){
            if (contacts[i].firstName === name) {
                if(contacts[i].hasOwnProperty(prop)){
                    return contacts[i][prop];
                } else {
                    return "Property does not exist";
                }
            }
        }
        return "Contact does not exist"; 
    }, 
    doubleNumbers: (arr2) => {
        let doubleArr = [];
        arr2.forEach(function(item){
            item = item * 2;
            doubleArr.push(item);
        })
        return doubleArr;
    }, 
    profileDetails: () => {
        let profile = "";
        for(let contact in contacts){
            profile += contacts[contact].firstName
                        + " "
                        + contacts[contact].lastName
                        + " - "
                        + contacts[contact].number
                        + "\n";
            console.log(profile);            
                      } 
          return profile; 
    }, 
    countDown: (num) => {
        let text = "";
        let i = num;
        while(i >= 0){
            text += i + " ";
            i--;
        }
        return text;
    }, 
    counter: (num1) => {
        let count = "";
        let i = 0;
        do {
            count += i + " ";
            i++;
        }
        while(i <= num1);
        return count;
    }     
};

export default functions;

console.log(functions.varType(23));
console.log(functions.varType("Chisom"));
console.log(functions.varType(true));

functions.sumRange("0", 100);

console.log(functions.profileLookup("Harry", "likes"));

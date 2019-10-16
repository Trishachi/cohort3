import functions from './syntax.js'

test('Check variable type', () => {
    expect(functions.varType(23)).toBe("number"); 
    expect(functions.varType("Chisom")).toBe("string");  
    expect(functions.varType(true)).toBe("boolean");  
});

test('Which number is bigger?', () => {
    expect(functions.biggerNum(1,2)).toBe("2 is bigger");
});

test('What is the total of the range?', () => {
    expect(functions.sumRange("0",100)).toBe(5050);
});

test('revsers the given array', () => {
    expect(functions.reverseArray([1, 3, 6, 9, 5, 2, 8, 5])).toEqual([ 5, 8, 2, 5, 9, 6, 3, 1 ]);
});

test('Is task in Todo List?', () => {
    expect(functions.updateTodo("code", ["code", "laundry", "dinner"], "sleep" )).toEqual(["sleep", "laundry", "dinner"]);
});

test('Find Profile', () => {
    expect(functions.profileLookup("Harry", "likes")).toEqual(["Hogwarts", "Magic", "Hagrid"]);
});

test('Double numbers in array', () => {
    expect(functions.doubleNumbers([2, 5, 8])).toEqual([4, 10, 16]);
});

test('Print profile details', () => {
    expect(functions.profileDetails()).toEqual("Chisom Okoye - 0543236543" +"\n"+
                                             "Harry Potter - 0994372684" +"\n"+
                                             "Sherlock Holmes - 0487345643" +"\n");
});

test('Count down to take off', () => {
    expect(functions.countDown(10)).toBe("10 9 8 7 6 5 4 3 2 1 0 ");
});

test('Counter/Timer', () => {
    expect(functions.counter(10)).toBe("0 1 2 3 4 5 6 7 8 9 10 ");
});
import { assertEquals } from './daily';
import functions from './daily';

test('Check for equality', () => {
    expect(assertEquals("a","b")).toBe(false); // Consider the edge cases
    });

/*
    Write a function to format an email based on an array.
*/
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

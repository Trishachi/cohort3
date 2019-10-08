/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

export function assertEquals(p1,p2){
    if (p1 === p2) return true;
          if (p1 !== p2) {
               console.log("*** the two values are not the same:" ,
                          "\n",
                          "p1 --> " + p1,
                          "\n",
                          "p2--> " + p2);
            return false;
          }
  };

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");



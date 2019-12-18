import React from "react";

import { LinkedList } from "./LinkedListFunctions.js";

const ll = new LinkedList();

ll.insertAtFirst("Carrots", 100);
ll.insertAtFirst("Potatoes", 50);
ll.insertAtFirst("Berries", 20);
ll.insertAtLast("Grapes", 70);
ll.insertAtIndex("Tomatoes", 500, 3);
// ll.clearList();
// ll.getAtIndex(3);
ll.removeAtIndex(3);
console.log(ll.isListEmpty());
ll.printListData();
// ll.removeFromFirst();
ll.removeFromLast();
ll.printListData();

function LinkedListApp() {
  return (
    <div>
      <h1>Welcome to Lists App</h1>
    </div>
  );
}

export default LinkedListApp;

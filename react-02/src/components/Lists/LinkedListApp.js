import React from "react";

import { LinkedList } from "./LinkedListFunctions.js";

const ll = new LinkedList();
// ll.insertAtFirst(100);
// ll.removeAtIndex(0);
// ll.insertAtFirst(200);
// ll.insertAtFirst(300);
// ll.insertAtLast(400);
// ll.insertAtIndex(500, 3);
// // ll.removeAtIndex(2);
// // ll.clearList();
// ll.printListData();
// // ll.getAtIndex(10);

ll.insertAtFirst("Carrots", 100);
ll.insertAtFirst("Potatoes", 50);
ll.insertAtFirst("Berries", 20);
ll.insertAtLast("Grapes", 70);
ll.printListData();

function LinkedListApp() {
  return (
    <div>
      <h1>Welcome to Lists App</h1>
    </div>
  );
}

export default LinkedListApp;

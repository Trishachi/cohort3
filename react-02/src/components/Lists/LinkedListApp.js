import React from "react";

import { LinkedList } from "./LinkedListFunctions.js";

const ll = new LinkedList();
ll.insertAtFirst(100);
ll.insertAtFirst(200);
ll.insertAtFirst(300);
ll.insertAtLast(400);
ll.insertAtIndex(500, 3);

ll.removeAtIndex(2);
ll.clearList();

ll.printListData();
// ll.getAtIndex(10);

function LinkedListApp() {
  return (
    <div>
      <h1>Welcome to Lists App</h1>
    </div>
  );
}

export default LinkedListApp;

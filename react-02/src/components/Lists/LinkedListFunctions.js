export class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject;
    this.amount = amount;
    this.forwardNode = forwardNode;
  }
  show() {
    return `Subject: ${this.subject} and Amount: ${this.amount}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertAtFirst(subject, amount) {
    let node = new ListNode(subject, amount);
    if (this.head !== null) {
      node.forwardNode = this.head;
    }
    this.head = node;
    this.size++;
    return node;
  }

  // insert last node
  insertAtLast(subject, amount) {
    let node = new ListNode(subject, amount);
    let current;
    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.forwardNode) {
        current = current.forwardNode;
      }
      current.forwardNode = node;
    }
    this.size++;
  }

  //insert at index
  insertAtIndex(subject, amount, index) {
    //if index is out of range - Consider adding to the end
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index ie index is zero
    if (index === 0) {
      this.head = new ListNode(subject, amount, this.head);
      return;
    }
    const node = new ListNode(subject, amount);
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.forwardNode; //Node after the index
    }
    node.forwardNode = current;
    previous.forwardNode = node;
    this.size++;
  }

  //Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(`${current.subject}: ${current.amount} `);
      }
      count++;
      current = current.forwardNode;
    }
    return null;
  }

  //check if list is empty
  isListEmpty() {
    return this.size === 0;
  }

  //remove from first
  removeFromFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.forwardNode;
    return this.head;
  }

  // remove from last
  removeFromLast() {
    //if list is empty
    if (!this.head) {
      return null;
    }
    // if only one node in the list
    if (!this.head.forwardNode) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let tail = this.head.forwardNode;
    while (tail.forwardNode !== null) {
      previous = tail;
      tail = tail.forwardNode;
    }
    previous.forwardNode = null;
    return this.head;
  }

  //remove at index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    //Remove First
    if (index === 0) {
      this.head = current.forwardNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.forwardNode;
      }
      previous.forwardNode = current.forwardNode;
    }
    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(`${current.subject}: ${current.amount} `);
      current = current.forwardNode;
    }
  }
}

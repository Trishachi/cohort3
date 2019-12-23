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
    this.current = null;
  }

  //Methods to Implement
  //Helper function to find the current or desired location
  // getAtIndex = index => {
  //   let current = this.head;
  //   let counter = 0;
  //   while (current) {
  //     if (counter === index) {
  //       console.log(`${current.subject}: ${current.amount} `);
  //       return current;
  //     }
  //     counter++;
  //     current = current.forwardNode;
  //   }
  // };

  //first
  first = () => {
    this.current = this.head;
    return this.current;
  };

  //last
  last = () => {
    if (this.current.forwardNode === null) return this.current;
    while (this.current.forwardNode !== null) {
      this.current = this.current.forwardNode;
    }
    return this.current;
  };

  //next
  next = () => {
    if (this.current === null) return `List is empty`;
    if (this.current.forwardNode === null) return `Single Item on the List`;
    this.current = this.current.forwardNode;
    return this.current;
  };

  //previous
  previous = () => {
    if ((this.current = this.head)) return `Single Item on the List`;
    let previousNode = this.head;
    while (this.current !== previousNode.forwardNode) {
      previousNode = previousNode.forwardNode;
    }
    this.current = previousNode;
    return this.current;
  };

  //insert
  insert = (subject, amount, currentIndex) => {
    //if index is out of range - Consider adding to the end
    if (currentIndex > 0 && currentIndex > this.size) {
      return `Index out of range`;
    }
    //if index is at zero - ie insert at begining
    if (currentIndex === 0) {
      this.head = new ListNode(subject, amount, this.head);
      return this.head;
    }
    //Transveres to find and insert at desired location - after current location
    const prev = this.getAtIndex(currentIndex - 1);
    let node = new ListNode(subject, amount);
    node.forwardNode = prev.forwardNode;
    prev.forwardNode = node;
    this.size++;
    return this.head;
  };
  //delete
  //sumAmounts
}

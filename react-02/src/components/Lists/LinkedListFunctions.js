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
  insert = (subject, amount) => {
    //if index is out of range - Consider adding to the end
    let newNode = new ListNode(subject, amount);
    //if list is empty - insert at begining
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      newNode.forwardNode = this.current.forwardNode;
      this.current.forwardNode = newNode;
      this.current = newNode;
    }
    return this.current;
  };
  //delete
  //sumAmounts
}

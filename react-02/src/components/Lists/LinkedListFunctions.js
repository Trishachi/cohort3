export class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  show() {
    return `Subject: ${this.data} and Amount: ${this.next}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertAtFirst(data) {
    this.head = new ListNode(data, this.head);
    this.size++;
  }

  // insert last node
  insertAtLast(data) {
    let node = new ListNode(data);
    let current;
    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //insert at index
  insertAtIndex(data, index) {
    //if index is out of range - Consider adding to the end
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index ie index is zero
    if (index === 0) {
      this.head = new ListNode(data, this.head);
      return;
    }
    const node = new ListNode(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after the index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  //Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
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
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
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
      console.log(current.data);
      current = current.next;
    }
  }
}

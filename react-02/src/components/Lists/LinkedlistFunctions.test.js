import { ListNode, LinkedList } from "./LinkedListFunctions.js";

test("Check if linkedList functions are working", () => {
  let newList = new LinkedList();
  newList.insertAtFirst("Carrots", 100);
  //   newList.insertAtFirst("Potatoes", 50);
  //   newList.insertAtFirst("Berries", 20);
  //   newList.first();
  expect(newList.printListData()).toBe("Carrots: 100");
});

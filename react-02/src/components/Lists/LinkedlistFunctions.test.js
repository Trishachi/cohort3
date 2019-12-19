import { ListNode, LinkedList } from "./LinkedListFunctions.js";

test("Linkedlist show function", () => {
  const node = new ListNode("Carrot", 20, null);
  expect(node.show()).toBe("Subject: Carrot and Amount: 20");
});

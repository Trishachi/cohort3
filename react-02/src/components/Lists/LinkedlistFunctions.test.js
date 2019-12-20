import { ListNode, LinkedList } from "./LinkedListFunctions.js";

test("ListNode show function", () => {
  const node = new ListNode("Carrot", 20, null);
  expect(node.show()).toBe("Subject: Carrot and Amount: 20");
});

const newList = new LinkedList();
test("Testing LinkedList Functions", () => {
  const newList = new LinkedList();

  expect(newList.head).toBe(null);
  let node1 = newList.insert("Tomatoes", 30, 0);
  console.log(node1);
  expect(newList.first()).toBe(node1);
  expect(newList.last()).toBe(node1);
  console.log(newList.next(0));
  expect(newList.next(0)).toBe(undefined);
});

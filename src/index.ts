import Array from './arrays.js';
import Stack from './stacks.js';
import { SinglyLinkedList, DoubleLinkedList, } from './linked_lists.js';

(() => {
  (() => {
    console.log('\nLearning DSA - Arrays\n');
    const newArray = new Array(3);
    newArray.add(7);
    newArray.clear();
    newArray.add(2);
    newArray.add(5);
    newArray.add(15);
    newArray.set(1, 0);
    newArray.add(7);
    console.log(newArray.toString());
    newArray.removeAt(1);
    newArray.remove(7);
    console.log(newArray.toString());
    console.log(newArray.indexOf(2));
    console.log(newArray.contains(2));
    console.log(newArray.get(0));
    console.log(newArray.size());

  })();

  (() => {
    console.log('\nLearning DSA - Linked lists\n');

    console.log(`\n
              |||||||      ||||          ||||
            ||||   ||||    ||||          ||||
            ||||   ||||    ||||          ||||
            ||||           ||||          ||||
              |||||        ||||          ||||
                |||||      ||||          ||||
                   ||||    ||||          ||||
            ||||   ||||    ||||          ||||
            ||||   ||||    ||||||||||    ||||||||||
              |||||||      ||||||||||    ||||||||||
        `);

    const sLList = new SinglyLinkedList<number>();
    sLList.add(1);
    sLList.addAtStart(2);
    console.log('1', sLList, '\n');
    sLList.addAtStart(4);
    sLList.add(2);
    console.log('2', sLList, '\n');
    console.log('3', (<any>sLList).head, '\n');
    console.log('4', (<any>sLList).head.next, '\n');
    console.log('5', (<any>sLList).head.next.prev, '\n');
    sLList.removeFirst();
    console.log('6', sLList, '\n\n\n');



    console.log(`\n
            |||||||||       ||||          ||||
            ||||||||||      ||||          ||||
            ||||  ||||      ||||          ||||
            ||||   ||||     ||||          ||||
            ||||    ||||    ||||          ||||
            ||||    ||||    ||||          ||||
            ||||   ||||     ||||          ||||
            ||||  ||||      ||||          ||||
            ||||||||||      ||||||||||    ||||||||||
            |||||||||       ||||||||||    ||||||||||
        `);
    const dLList = new DoubleLinkedList<number>();
    dLList.addAtEnd(2);
    console.log('1', dLList, '\n');

    dLList.addAtStart(1);
    console.log('2', dLList, '\n');

    dLList.clear();
    console.log('3', dLList, '\n');

    dLList.addAtEnd(3);
    dLList.addAtStart(4);
    console.log('4', dLList.peekLast());
    console.log(dLList.peekFirst(), '\n');

    dLList.removeLast();
    console.log('5', dLList, '\n');

    dLList.removeFirst();
    console.log('6', dLList, '\n');

    dLList.addAtEnd(5);
    dLList.addAtStart({ greeting: 'hello' } as any);
    dLList.addAtStart(6);
    dLList.addAtEnd(6);
    console.log('7', dLList, '\n');

    dLList.removeAt(0);
    console.log('8', dLList, '\n');

    dLList.remove(5);
    console.log('9', dLList, '\n');

    console.log(dLList.indexOf(6));
    console.log(dLList.contains(6));
  })();

  (() => {
    console.log('\nLearning DSA - Stacks\n');

    const stack = new Stack<number>();
    stack.push({ greeting: 'hello' } as any);
    stack.push(1);
    stack.push(2);
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.size());
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.isEmpty());
    console.log(stack);
  })();
})();
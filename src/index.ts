import Stack from './stacks.js';
import Queue from './queues.js';
import { DynamicArray, } from './arrays.js';
import { PriorityQueue } from './priority_queue.js';
import { SinglyLinkedList, DoubleLinkedList, } from './linked_lists.js';

(() => {
  (() => {
    console.log('\nLearning DSA - Arrays\n');
    const newDynamicArray = new DynamicArray(3);
    newDynamicArray.add(7);
    newDynamicArray.clear();
    newDynamicArray.add(2);
    newDynamicArray.add(5);
    newDynamicArray.add(15);
    newDynamicArray.set(1, 0);
    newDynamicArray.add(7);
    console.log(newDynamicArray.toString());
    newDynamicArray.removeAt(1);
    newDynamicArray.remove(7);
    console.log(newDynamicArray.toString());
    console.log(newDynamicArray.indexOf(2));
    console.log(newDynamicArray.contains(2));
    console.log(newDynamicArray.get(0));
    console.log(newDynamicArray.size());

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

    const sLList = new SinglyLinkedList<number | object>();
    sLList.addAtEnd(2);
    sLList.addAtStart(1);
    console.log('1', sLList.printValues(), '\n');
    sLList.addAtStart(7);
    console.log('2', sLList.printValues(), '\n');
    sLList.addAtStart(4);
    sLList.addAtEnd(2);
    console.log('3', sLList.printValues(), '\n');
    sLList.removeFirst();
    console.log('4', sLList.printValues(), '\n\n\n');



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
    const dLList = new DoubleLinkedList<number | object>();
    dLList.addAtEnd(2);
    console.log('1', dLList.printValues(), '\n');

    dLList.addAtStart(1);
    console.log('2', dLList.printValues(), '\n');

    dLList.clear();
    console.log('3', dLList.printValues(), '\n');

    dLList.addAtEnd(3);
    dLList.addAtStart(4);
    console.log('4', dLList.peekLast());
    console.log(dLList.peekFirst(), '\n');

    dLList.removeLast();
    console.log('5', dLList.printValues(), '\n');

    dLList.removeFirst();
    console.log('6', dLList.printValues(), '\n');

    dLList.addAtEnd(5);
    dLList.addAtStart({ greeting: 'hello' });
    dLList.addAtStart(6);
    dLList.addAtEnd(6);
    console.log('7', dLList.printValues(), '\n');

    dLList.removeAt(0);
    console.log('8', dLList.printValues(), '\n');

    dLList.remove(5);
    console.log('9', dLList.printValues(), '\n');

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


  (() => {
    console.log('\nlearning DSA - Queues\n');

    const queue = new Queue<number>();
    console.log(queue);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.dequeue());
    console.log(queue.peek());
    console.log(queue.size());
    console.log(queue.dequeue());
    console.log(queue.peek());
    console.log(queue.isEmpty());
    console.log(queue);
  })();


  (() => {
    console.log('\nlearning DSA - Priority Queues\n');

    const pQueue = new PriorityQueue<number>([8, 4, 1, 41, 2, 3, 7, 4, 5]);
    console.log(pQueue);
    pQueue.add(5);
    console.log(pQueue);
    console.log(pQueue.poll());
    console.log(pQueue);
    console.log(pQueue.peek());
    console.log(pQueue.remove(5));
    console.log(pQueue);
    console.log(pQueue.peek());
    pQueue.add(3);
    pQueue.add(1);
    console.log(pQueue.isEmpty());
    console.log(pQueue);
    console.log('isMinHeap?', pQueue.isMinHeap(2));
  })();

  return;
  // process.exit(0);
})();
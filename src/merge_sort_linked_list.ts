import { timeInterval, } from './utils/timeInterval';
import { SinglyLinkedList, DoubleLinkedList, NodeItem, } from './linked_lists';

class MergeSortLinkedList<T> {

    public recursiveDepth = 0;

    public run(linked_list: SinglyLinkedList<T> | DoubleLinkedList<T>) {
        if (linked_list instanceof SinglyLinkedList)
            return this.handleSortSinglyLinkedList(linked_list);
        return this.handleSortDoubleLinkedList(linked_list);
    }

    private handleSortSinglyLinkedList(linked_list: SinglyLinkedList<T>): SinglyLinkedList<T> {
        if (linked_list.size() === 1 || linked_list.head === null) return linked_list;

        let [leftList, rightList] = this.handleSplitSinglyLinkedList(linked_list);
        leftList = this.handleSortSinglyLinkedList(leftList);
        rightList = this.handleSortSinglyLinkedList(rightList);

        console.log([leftList.printValues(), rightList.printValues()])
        return this.handleMergeSinglyLinkedList(leftList, rightList);
    }

    private handleSplitSinglyLinkedList(linked_list: SinglyLinkedList<T>): any[] {
        if (linked_list === null || linked_list.head === null) return [linked_list, null];

        const midpoint = Math.floor(linked_list.size() / 2);
        let midNode = linked_list.nodeAt(midpoint - 1) as NodeItem<T>;
        const leftList = linked_list;
        const rightList = new SinglyLinkedList<T>();
        rightList.head = midNode.next as NodeItem<T>;
        midNode.next = null;

        return [leftList, rightList];
    }

    private handleMergeSinglyLinkedList(left_list: SinglyLinkedList<T>, right_list: SinglyLinkedList<T>): SinglyLinkedList<T> {
        const newList = new SinglyLinkedList<T>();
         newList.addAtStart(0 as T);

         let current = newList.head as NodeItem<T>;

         let leftHead = left_list.head;
         let rightHead = right_list.head;

         while (leftHead !== null || rightHead !== null) {
             if (leftHead === null) {
                 current.next = rightHead
                 rightHead = rightHead!.next as NodeItem<T>;
             } else if (rightHead === null) {
                 current.next = leftHead;
                 leftHead = leftHead.next as NodeItem<T>;
             } else {
                 const leftData = leftHead.data as T;
                 const rightData = rightHead.data as T;

                 if (leftData < rightData){
                     current.next = leftHead;
                     leftHead = leftHead.next;
                 } else {
                     current.next = rightHead;
                     rightHead = rightHead.next;
                 }
             }
             current = current.next as NodeItem<T>;
         }

         newList.head = newList.head!.next;
         return newList;
    }


    private handleSortDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size() < 2) return linked_list;
        return linked_list;
    }

    private handleSplitDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size() < 2) return linked_list;
        return linked_list;
    }

    private handleMergeDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size() < 2) return linked_list;
        return linked_list;
    }

}


const listLength = 30;
const sLList = new SinglyLinkedList<number>();
const dLList = new DoubleLinkedList<number>();
for (let i = 0; i < listLength; i++) {
    const valueToAdd = Math.ceil(Math.random() * listLength);
    sLList.addAtStart(valueToAdd);
    dLList.addAtStart(valueToAdd);
}

(() => {
    // Sort a singly-linked list using merge sort
    const timeBeforeSLLSort = new Date();
    console.log('Before merge_sort sorting...');
    console.log({
        'startTime': timeBeforeSLLSort,
        'startInterval': timeInterval(timeBeforeSLLSort, timeBeforeSLLSort, 's'),
        listToSort: sLList.printValues()
    });

    const mergeSort = new MergeSortLinkedList();
    const mergeSortedList = mergeSort.run(sLList) as SinglyLinkedList<number>;
    console.log('\nAfter merge_sort sorting...');
    console.log({
        'recursiveDepth': mergeSort.recursiveDepth,
        'timeInterval': timeInterval(timeBeforeSLLSort, new Date(), 'ms'),
        sortedArray: mergeSortedList?.printValues()
    });
})();


// (() => {
//     // Sort a doubly-linked list using merge sort
//     const timeBeforeDLLSort = new Date();
//     console.log('Before merge_sort sorting...');
//     console.log({
//         'startTime': timeBeforeDLLSort,
//         'startInterval': timeInterval(timeBeforeDLLSort, timeBeforeDLLSort, 's'),
//         listToSort: dLList.printValues()
//     });
//
//     const mergeSort = new MergeSortLinkedList();
//     const mergeSortedList = mergeSort.run(dLList) as DoubleLinkedList<number>;
//     console.log('\nAfter merge_sort sorting...');
//     console.log({
//         'recursiveDepth': mergeSort.recursiveDepth,
//         'timeInterval': timeInterval(timeBeforeDLLSort, new Date(), 'ms'),
//         sortedArray: mergeSortedList
//     });
// })();
import { timeInterval, } from './utils/timeInterval';
import { SinglyLinkedList, DoubleLinkedList, } from './linked_lists';

class MergeSortLinkedList<T> {

    public recursiveDepth = 0;

    public run(linked_list: SinglyLinkedList<T> | DoubleLinkedList<T>) {
        if (linked_list instanceof SinglyLinkedList) {
            return this.handleSortSinglyLinkedList(linked_list);
        }
        return this.handleSortDoubleLinkedList(linked_list);
    };

    private handleSortSinglyLinkedList(linked_list: SinglyLinkedList<T>): SinglyLinkedList<T> {
        if (linked_list.size < 2) return linked_list;
        return linked_list;
    }

    private handleSplitSinglyLinkedList(linked_list: SinglyLinkedList<T>): SinglyLinkedList<T>[] {
        if (linked_list.size < 2) return [linked_list];
        const midpoint = Math.floor(linked_list.size / 2);
        const nodeAtMidpoint = linked_list.nodeAt(midpoint);


        return [linked_list, linked_list];
    }

    private handleMergeSinglyLinkedList(linked_list: SinglyLinkedList<T>): SinglyLinkedList<T> {
        if (linked_list.size < 2) return linked_list;
        return linked_list;
    }



    private handleSortDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size < 2) return linked_list;
        return linked_list;
    }

    private handleSplitDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size < 2) return linked_list;
        return linked_list;
    }

    private handleMergeDoubleLinkedList(linked_list: DoubleLinkedList<T>): DoubleLinkedList<T> {
        if (linked_list.size < 2) return linked_list;
        return linked_list;
    }

}


const listLength = 10;
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
        sortedArray: mergeSortedList
    });
})();


(() => {
    // Sort a doubly-linked list using merge sort
    const timeBeforeDLLSort = new Date();
    console.log('Before merge_sort sorting...');
    console.log({
        'startTime': timeBeforeDLLSort,
        'startInterval': timeInterval(timeBeforeDLLSort, timeBeforeDLLSort, 's'),
        listToSort: dLList.printValues()
    });

    const mergeSort = new MergeSortLinkedList();
    const mergeSortedList = mergeSort.run(dLList) as DoubleLinkedList<number>;
    console.log('\nAfter merge_sort sorting...');
    console.log({
        'recursiveDepth': mergeSort.recursiveDepth,
        'timeInterval': timeInterval(timeBeforeDLLSort, new Date(), 'ms'),
        sortedArray: mergeSortedList
    });
})();
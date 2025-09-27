class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    /**
     * Since the index is passed as an input and dont have an access directly to index therefore
     * will the traverse the linkedList until the index is met. Initially create a variable then assign 0 to it.
     * Increment the variable while traversing until the index is met  
     */
    insert(index, value) {
        if (index > this.length) {
            return this.append(value)
        } 
        const newNode = new Node(value);
        const leaderNode = this.traverseToIndex(index - 1);
        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
        this.length++;
        return this.head;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    remove(index) {
        const leaderNode = this.traverseToIndex(index - 1);
        const unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        this.length--;
        return this.head;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this.head;
    }

    removeHead() {
        if (!this.head) {
            return null
        }
        const removed = this.head;
        this.head = this.head.next;
        this.length--
        return removed.value
    }

    removeTail() {
        if (this.head === null) {
            return null
        }
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return this.head
        }

       let current = this.head
        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null;
        this.tail = current;
        return this.head
    }

    search(value) {
        let counter = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return counter
            }
            current = current.next;
            counter++;
        }
        return -1;
    }

}

// const ll = new LinkedList(10);
// ll.append(5)
// ll.append(15)
// ll.prepend(1)
// ll.insert(2, 57)
// ll.insert(3, 78)
// ll.remove(3)

const ll = new LinkedList(10)
ll.append(5)
ll.append(16)
ll.prepend(1)
ll.insert(2, 99)
ll.insert(20, 88)
ll.remove(2)
ll.remove(2)
ll.reverse()
ll.printList()
// actual: [1, 10, 16, 88]
// reverse: [88, 16, 10, 1]
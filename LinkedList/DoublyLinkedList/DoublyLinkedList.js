class Node {
    constructor(value) {
        this.value = value
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1; 
    }

    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        const newNode = new Node(value);
        const leaderNode = this.traverseToIndex(index - 1);
        const followerNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = followerNode;
        newNode.prev = leaderNode;
        followerNode.prev = newNode;
        this.length++;
    }

    remove(index) {
        const leaderNode = this.traverseToIndex(index - 1);
        const unwantedNode = leaderNode.next;
        const followerNode = unwantedNode.next;
        leaderNode.next = followerNode;
        followerNode.prev = leaderNode;
        this.length--;
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

    printList() {
        let currentNode = this.head;
        let arr = []
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr
    }
}

const dl = new DoublyLinkedList(5)
dl.append(10)
dl.append(15)
dl.prepend(2)
dl.insert(3, 13)
dl.remove(3)
console.log(dl.printList())
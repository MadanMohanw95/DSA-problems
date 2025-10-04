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

    findMiddleNode() {
        if (!this.head) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    hasCycle() {
        if (!this.head) {
            return false
        }

        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    lengthOfCycle() {
        if (!this.head) {
            return 0
        }
        let headNode = this.head
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
             slow = slow.next;
            fast = fast.next.next;
            
            if (slow === fast) {
                 slow = slow.next;
                let counter = 1
                while (slow !== fast) {
                    slow = slow.next
                    counter++
                }
                return counter
            }
        }
        return 0
    }

    firstNodeInCycle() {
        if (!head) {
            return null
        }
        
        let resSet = new Set();
        let current = head;
        while (current !== null) {
            if (!resSet.has(current)) {
                resSet.add(current)
                current = current.next
            } else {
                return current
            }
        }
        return null;
    }

     // 1 pointer O(n) space and O(n) time 
    FindNthNodeFromEnd(index) {
        if (!this.head) {
            return null
        } 
        let obj = Object.create(null);
        let current = this.head;
        let idx = 1;
        while (current !== null) {
            obj[idx] = current;
            current = current.next;
            idx++;
        }

        let nthIdx = idx - index;
        const node = obj[nthIdx]
        return node
    }

    // 1 pointer O(1) space and O(n) time <= O(n) + O(n)
    FindNthNodeFromEnd2(nthIdx) {
        let current = this.head;
        let idx = 1;
        while (current != null) {
            current = current.next;
            idx++
        }

        if (nthIdx > idx) {
            return null
        }

        let target = idx - nthIdx;
        let counter = 1;
        let curr = this.head;
        while (counter < target) {
            curr = curr.next;
            counter++
        }
        return curr;
    }

    // Two pointer 1 pass O(1) Space and O(n) time
    FindNthNodeFromEnd3(nthIdx) {
        if (!this.head) return
        let left = this.head
        let right = this.head;
        let idx = 1;
        while (idx <= nthIdx) {
            if (!right) return null
            right = right.next;
            idx++
        }

        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        return left
    }

     // store a idx variable with 1 index based approach.
    // traversal until k-1 position to break into first linked list 
    // to break the linked list i need to point k-1 node next reference as null
    // before referencing next node as null, ill store k-1 node next reference 
    // in another variable called second head. It ends up into two linked lists

    splitLinkedListIntoTwo(k) {
        if (k === 1) {
            return {
                first: null,
                second: this.head
            }
        }

        let map = Object.create(null);
        let node = this.head;
        let len = 0;
        while (node !== null) {
            len++
            map[len] = node;
            node = node.next;
        }

        if (k > len) {
            return {
                first: this.head,
                second: null
            }
        }

        let beforeNode = map[k-1]
        beforeNode.next = null;
        let secondHead = map[k];
        return {
            first: this.head,
            second: secondHead
        }
    }

    /**
     * if k equals 1 return first list as null, then return rest of the list in second
     * first traversal until k-1 and break the linked list by referencing next item as null
     * assign the kth node to second list.
     */
    splitLinkedListIntoTwoImprovement(k) {
        if (k === 1) {
            return {
                first: null,
                second: this.head,
            }
        }
        let len = 1;
        let current = this.head;
        while (current !== null && len < k - 1) {
            current = current.next;
            len++
        } 
        let secondHead = current
        current.next = null;
        this.head.next = current;

        return {
            first: this.head,
            second: secondHead
        }
    }
}


// const ll = new LinkedList(10);
// ll.append(5)
// ll.append(15)
// ll.prepend(1)
// ll.insert(2, 57)
// ll.insert(3, 78)
// ll.remove(3)

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// node1.next = node2;
// node2.next = node3
// node3.next =node4
// node4.next = node2
// ll.head = node1

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


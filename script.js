class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
      const newNode = new Node(val);

      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
        return;
      }
    }

}

const list = new LinkedList();
list.push("hello");
console.log(list);
// list.push("goodbye");

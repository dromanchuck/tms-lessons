//LIFO
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    this.storage[this.count] = value;

    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    let arrResult = this.array[this.count];
    delete this.storage[this.count];

    this.array = this.array.filter((item) => {
      if (item === arrResult) {
        return false;
      }

      return true;
    });
    // или
    // this.array.pop();
    return result;
  }

  peek() {
    //return this.array[this.count - 1];
    return this.storage[this.count - 1];
  }

  size() {
    //return this.array.length
    return this.count;
  }

  print() {
    console.log(this.storage);
    console.log(this.array);
  }
}

const stack = new Stack();
stack.print();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.peek();
stack.size();

//FIFO
class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }
}

//HashTable
function hash(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

let hashTable = [, ["Lisa Smith", "+5555555"], , , , , ["John Snow", "+66666"]];

hashTable[1][0];
hashTable[1][1];

//Linked list

let linkedList = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

let current = linkedList;

while (true) {
  console.log(current);

  if (!current.next) {
    break;
  }

  current = current.next;
}

//double
let first = {
  prev: null,
  value: 0,
};

let second = {
  prev: first,
  value: 1,
};

let third = {
  prev: second,
  value: 2,
};

let fourth = {
  prev: third,
  value: 3,
};

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = null;

//Set
let set = new Set([1, 2, 3, 4]);

set.add(1);
set.add(10);
console.log(set.has(1)); // true;
console.log(set.has(11)); // false;
set.delete(1);
console.log(set.size);
//ACTIVE, PREPARING, DONE, DELIVERING
let activeStatusesSet = new Set(["ACTIVE", "PREPARING"]);
let status = "DONE";

activeStatusesSet.has(status);

let tree = {
  value: 34,
  left: {
    value: 32,
    left: {
      value: 30,
    },
    right: {
      value: 33,
    },
  },
  right: {
    value: 36,
    left: {
      value: 30,
    },
    right: {
      value: 39,
    },
  },
};

const arr = [1, 2, 3];
arr[2]; //O(1)
function sum(a, b) {
  return a + b;
} //O(1)

//O(log N)

//O(n)

function sumArr(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

sumArr([1, 2, 3]);
sumArr([2, 5, -19]);

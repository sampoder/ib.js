# `ib.js`

This JS library implements the data structures outlined in the [IB Computer Science Pseudocode Guide](https://computersciencewiki.org/images/c/c6/IB-Pseudocode-rules.pdf) exactly as they are. Use it to experiment with the data structures or what ever you would like to do when studying CS!

## Installation

The package is available as `@sampoder/ib.js` on [NPM](https://www.npmjs.com/package/@sampoder/ib.js) which after installation can be used like:

```js
const { Stack, Collection, Queue } = require('@sampoder/ib.js')
```

You can also import it directly from Skypack through URL imports:

```js
import { Stack, Collection, Queue } from 'https://cdn.skypack.dev/@sampoder/ib.js';
```

Make sure your script has the property `type="module"` set.

## Collections

The `Collection()` class has the following methods:

| Method      | Description |
| ----------- | ----------- |
| addItem(x)  | Add item to collection    |
| getNext()   | Get the next item in the collection |
| resetNext() | Go back to the start of the collection |
| hasNext()   | Test if the next item exists |
| isEmpty()   | Test if a collection is empty |

## Stacks

The `Stack()` class has the following methods:

| Method      | Description |
| ----------- | ----------- |
| push()      | Push an item onto the top of the stack   |
| pop()       | Removes and returns the item on the top of the stack |
| isEmpty()   | Test if a stack is empty |

## Queues

The `Queue()` class has the following methods:

| Method      | Description |
| ----------- | ----------- |
| enqueue()   | Adds an item to the back of the queue |
| dequeue()   | Returns and removes the first item in the queue |
| isEmpty()   | Test if a queue is empty |

> Note: these are all minor adaptations of preexisting JS functionality but I found it helpful to have it presented in this way to understand what the course meant. 

## Sample Code

Here is some messy sample code to help you get an idea of how the library works.

```js
const { Stack, Collection, Queue } = require('@sampoder/ib.js')

let s = new Stack()

console.log(s.push("hi"))

console.log(s.push("sam"))

console.log(s.pop())

console.log(s.isEmpty())

let q = new Queue()

q.enqueue(2)

q.enqueue(1)

console.log(q.dequeue())

let c = new Collection()

c.addItem("sam")

c.addItem("p")

c.addItem("2")

c.addItem("3")

c.addItem("4")

while(c.hasNext()){
  console.log(c.getNext())
}

c.resetNext()

console.log(c.getNext())
```

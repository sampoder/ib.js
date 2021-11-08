const { Stack, Collection, Queue } = require('./dist')

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
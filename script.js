class Node {
    constructor(value = null) {
        this.value = value
        this.nextNode = null 
    }
}

class LinkedList {
  constructor() {
    this.headNode = null; // empty list
  }

  prepend(value) {
    const newNode = new Node(value) // Creates a new node
    newNode.nextNode = this.headNode // New node points to (null or a if b) 
    this.headNode = newNode // headNode points to newNode (b or a) 
  }

  size() {
    let count = 0;
    let current = this.headNode; // start at the first node

    while (current !== null) { // Go through each node until the address is null
        count += 1
        current = current.nextNode
    }

    return count;

    }

    append(value) {
        const newNode = new Node(value)

        // Empty list
        if (this.headNode === null) {
          this.headNode = newNode
          return
        }

        // Non empty list
        let current = this.headNode
        while (current.nextNode !== null) {
          current = current.nextNode // Current eventually reaches its last node
        }

        current.nextNode = newNode

    }

    head() {
        if (this.headNode === null) { // If empty list
          return undefined
        }
        return this.headNode.value
    }

    tail() {
      if (this.headNode === null) {
        return undefined
      }

      let current = this.headNode
      while (current.nextNode !== null) { // While node doesn't point to null
        current = current.nextNode
      }

      return current.value

    }

    at(index) {
      let current = this.headNode
      let count = 0

      while (current !== null) { // While the node does not = null
        if (count === index) {
          return current.value
        }
        count += 1
        current = current.nextNode
      }

      return undefined // If num is too high 
    }

    pop() { // Remove the first node 
      // Checks for empty list
      if (this.headNode === null) {
        return undefined
      }

      const removedValue = this.headNode.value // Gets value before being removed
      this.headNode = this.headNode.nextNode // headNode points to the next node instead
      return removedValue
    }

    contains(value) { // If a node contains a specific value
      let current = this.headNode
      while (current !== null) {
        if (current.value === value) return true
        current = current.nextNode
      }

      return false
    }

    findIndex(value) {
      let current = this.headNode
      let count = 0
      while (current !== null) {
        if (current.value === value) return count
        current = current.nextNode
        count += 1
      }
      
      return -1
    }

    toString() {
      let result = ""
      let current = this.headNode

      // Checks if empty
      if (this.headNode === null) return ""

      while (current !== null) {
        result += `( ${current.value} ) -> `
        current = current.nextNode
      }

      result += null
      return result
    }

}

export {LinkedList}






class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
const newNode = new Node(10)

class LinkedList2()
{
	constructor(value)
	{
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value)
	{
		const newNode = {
			value: value,
			next: null
		}
		this.head.next = newNode;
		this.head = newNode;
		this.length++;
	}

	prepend(value)
	{
		// add start in to list
		// create new node with ne value
		// update next address this.head
		// 
		const newNode = {
			value: value,
			next: null
		} 
		newNode.next = this.head;
		this.head = newNode;
		this.length--;
	}
}

const l  = new LinkedList2(2);
l.append(10);

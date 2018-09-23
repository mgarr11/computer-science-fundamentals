class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
        }
        
    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    reverseLinkedList(val) {
        if(!this.head || !this.head.next){
            console.log('empty list or list with one element')
            return;
        }
        var prev = null;
        var current = this.head;
        var next;

        while (current){
            next=current.next;
            current.next = prev;
            prev=current;
            current=next;
        }

        this.head = prev;

    }

    addToTail(value){
        const newNode = {value};
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead(){
        if (this.length == 0){
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
    
        return value;
    }
// write out what is happening here. 
    removeDuplicates(){
        if(!this.head || !this.head.next){
            console.log('empty or single item list');
            return;
        }
        var current;
        var next;
        var nodes = {};

        current = this.head;
        next = current.next;
        nodes[current.data] = true;

        while (next){
            var data = next.data;
            if(nodes[data]){
                current.next = next.next;
            } else {
                nodes[data]=true;
                current=next;
            }
            next=next.next
        }
    }
       
    
}

console.log(new LinkedList('Hello!'));

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');



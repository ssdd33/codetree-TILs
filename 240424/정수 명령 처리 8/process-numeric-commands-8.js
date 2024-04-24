const fs= require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const cmds =input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

class Node{
    constructor(x){
this.data = x;
this.next = null;
this.prev =null;
    }
}

class DoublyLinkedList {
    constructor (){
        this.head =null;
        this.tail = null;
        this.size = 0;
    }

    push_front(x){
        const new_node = new Node(x);
      const temp =this.head;
      this.head = new_node;
      this.head.next = temp;
      if(temp==null){
        this.tail =new_node;
      }else {
        temp.prev = new_node;
      }
        this.size++;
    }

    push_end(x){
        const new_node = new Node(x);
        const temp =this.tail;
        this.tail = new_node;
        new_node.prev = temp;
        if(temp==null){
            this.head = new_node;
        }else{
            temp.next = new_node;
        }
        this.size++;
    }

    pop_front(){
        const temp = this.head;
        if(this.head==null){
            console.log("list is empty")
        }else if(this.head.next==null){
            this.tail =null;
            this.head = null;
        }else{
            this.head = temp.next;
            temp.next.prev = null;
        }
        
        if(this.size>0){
            this.size--;
        }
        console.log(temp.data);
    }

    pop_end(){
        const temp = this.tail;
        
        if(this.tail ==null){
          console.log("list is empty")
        }else if(this.tail.prev ==null){
            this.head =null;
            this.tail =null;
        }else{
            temp.prev.next =null;
            this.tail = temp.prev;
        }

        if(this.size>0){
            this.size--;
        }

        console.log(temp.data);
    }

    get_size(){
        console.log(this.size);
    }

    empty(){
        console.log(this.size==0?1:0)
    }

    front(){
        if(this.head!=null){
            console.log(this.head.data)
        }
    }

    end(){
        if(this.tail!=null){
            console.log(this.tail.data)
        }
    }
}

const dll = new DoublyLinkedList();

for(let j=0; j<n; j++){
    const [c,i] = cmds[j];

    switch(c){
        case 'push_front': dll.push_front(i);
        break;
        case 'push_back' : dll.push_end(i);
        break;
        case 'pop_front':dll.pop_front();
        break;
         case 'pop_back':dll.pop_end();
        break;
         case 'size':dll.get_size();
        break;
         case 'empty':dll.empty();
        break;
         case 'front':dll.front();
        break;
         case 'back':dll.end();
        break;
    }
}
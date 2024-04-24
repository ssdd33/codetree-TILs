const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,m]=input[0].split(" ").map(Number);
const breads = input[1].trim().split("");
const cmds = input.slice(2,m+2).map(v=>v.split(" "));


class Node {
    constructor(x){
        this.data =x;
        this.prev =null;
        this.next =null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.END = new Node(-1);
        this.head = this.END;
        this.tail = this.END;
    }

    push_back(x){
        const new_node = new Node(x);

        if(this.begin()==this.end()){
            this.head = new_node;
            new_node.next = this.tail;
            this.tail.prev = new_node;
        }else{
            this.tail.prev.next = new_node;
            new_node.prev = this.tail.prev;
            new_node.next = this.tail;
            this.tail.prev = new_node;
        }

    }

    push_front(node,x){
        const new_node = new Node(x);
        if(this.begin()==node){
            this.head = new_node;
            new_node.next = node;
            node.prev = new_node;
        }else {
            node.prev.next = new_node;
            new_node.prev = node.prev;
            new_node.next = node;
            node.prev = new_node;
        }
    }

    erase(node){
        if(this.begin()==node){
            this.head = node.next;
            node.next.prev =null;
            node.next =null;
        }else if(node !=this.end()){
            node.prev.next= node.next;
            node.next.prev = node.prev;
            node.prev =null;
            node.next =null;
        }
    }

begin(){
    return this.head;
}

end(){
    return this.tail;
}

}
const dll = new DoublyLinkedList();
let node = dll.end();

for(let i=0;i<n;i++){
    dll.push_back(breads[i]);
}

for(let i=0; i<m; i++){
    const [c,s]=cmds[i];
   
    switch(c){
        case 'L':{
            if(node!=dll.begin()){
                node = node.prev;
            }
        }
        break;
        case 'R':{
            if(node!=dll.end()){
                node = node.next;
            }
        }break;
        case 'P':dll.push_front(node,s);
        break;
        case 'D':dll.erase(node);
        break;
    }
}

node= dll.begin();
let ans =''
while(node!=dll.end()){
    ans+=node.data
    node = node.next
}

console.log(ans)
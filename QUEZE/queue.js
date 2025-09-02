
class Queue{
    constructor(){
        this.s1 = []
        this.s2 = []
    }

    add(ele){
        this.s1.push(ele)
    }

    delete(){
        while(this.s1.length == 0){
            this.s2.pop(this.s1.push());
        }
        this.s1.pop();
        
        while(this.s2.length == 0){
            this.s1.pop(this.s2.pop());
        }
    }
}

let Que = new Queue();

Que.add(100);
Que.add(200);
Que.add(300);

console.log(Que);

Que.delete();

console.log(delete);


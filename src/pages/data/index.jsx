import React from 'react'
class Person{
    constructor(user,age){
        this.username=user
        this.age=age
    }
    static fun(){

    }
    ech(){
        console.log(this.username+'吃');
    }
}
const p3=new Person(1,2)
console.log(Person.y,'y');
console.log(Person.fun,'fun');

class Zhangsan extends Person{
    diaoyu(){
        console.log(this.username+'喜欢钓鱼');
    }
}
new Zhangsan('张三',21).diaoyu()

const p1=new Person('张三',21)
const p2=new Person('李四',24)
console.log(p1.username,'p1.username');
console.log(p1.age,'p1.age');
console.log(p2.username,'p2.username');
console.log(p2.age,'p2.age');
p1.ech()
p2.ech()
function p5 (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('小花')
        },3000)
    })
}

function p6(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('小白')
        },2000)
    })
}

function p7(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('小蓝')
        },2000)
    })
}

async function fun(){
    const x1=await Promise.all([p5(),p6()])
    console.log(x1);
    const x3=await p7()
    console.log(x3);
}

fun()
function index() {
  return (
    <div>
      
    </div>
  )
}

export default index

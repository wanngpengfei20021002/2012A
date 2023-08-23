
// weixin


// name | age
// name2 | age2
function fun<T, K extends keyof T> (obj: T, names: K): T[K] {
  return obj[names]
}

interface Person {
  name: string;
  age: number;
}

interface Person2 {
  name2: string;
  age2: number;
}

let person: Person = {
  name: '小花',
  age: 35,
};

let person2: Person2 = {
  name2: '小花',
  age2: 35,
};

let strings: number = fun<Person2, 'age2'>(person2, 'age2'); // ok, string[]

function fun2<T, U> (opt: T, x: U): T {
  return opt
}

fun2<number, string>(1, '1')
fun2<string, number>('1', 1)





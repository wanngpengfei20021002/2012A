class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  // { name, breed }
  [x: number]: Dog;
  // { name }
  [x: string]: Animal;
}

const x: NotOkay = {
  1: new Dog(),
}


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}



function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();

console.log(c, 'c');


c(10);
c.reset();
c.interval = 5.0;

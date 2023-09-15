const decLiteral: number = 0;
const name2: string = 'bob';
const arr: [] = [];
const arr2: number[] = [1, 2, 3, '4'];

const arr3: (number | string)[] = [1, '2', 2, 3, '4'];

const list: Array<number> = [1, 2, 3];
const list2: Array<number | string> = [1, 2, 3, '3'];

let x: [number, number, string, number] = [1, 2, '3', 4];

enum Color {
  Red,
  Green,
  Blue,
}

function fun(key: Color) {
  switch (key) {
    case Color.Red:
      console.log(Color.Red);
      break;

    case Color.Green:
      console.log(Color.Green);
      break;
  }
}

fun(Color.Red);
fun(Color.Green);
fun(123);

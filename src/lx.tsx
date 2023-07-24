interface A {
  user: string
  name: string
}

interface B {
  age: number
  name: string
}

type C = A | B

function zzz (opt: C): opt is A {
  return (opt as A).user !== undefined
}

function fun (opt: C): C {
  if (typeof opt === 'object') {
    opt.user
  }
  return opt
}

function padLeft (value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected string or number, got '${padding}'.`);
}

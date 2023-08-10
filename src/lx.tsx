interface ChildComponentProps {
  onChange: (val: string)=> void
}

interface ParentComponentProps extends ChildComponentProps {
  value: string
}

type Required<T> = {
  [P in keyof T]-?: T[P]; // 通过 - 删除 ? 修饰符
};


// 2008
5

// 2009 
6

// 2012
10

// 2013
4

// 2014
12

// 2015
12

// 2016
12

// 2017
12

// 2018
12

// 2019
12

// 2020
12

// 2021
12

// 2022
11

// 2023
6
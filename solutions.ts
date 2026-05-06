const filterEvenNumbers = (arr: number[]): number[] => {
  const evenNumberArray = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      evenNumberArray.push(number);
    }
  }
  return evenNumberArray;
};


const reverseString = (str: string): string => {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
};


type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};



const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface RBook {
  title: string;
  author: string;
  publishedYear: number;
  isRead: boolean;
}


const toggleReadStatus = (obj: Book): RBook => {
  const isRead: boolean = true;
  return { ...obj, isRead };
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const newArr: number[] = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};


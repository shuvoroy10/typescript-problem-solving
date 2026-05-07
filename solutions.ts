//Problem-1
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};
//Problem-2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

//Problem-3
type StringOrNumber = number | string;

const checkType = (input: StringOrNumber): "String" | "Number" => {
  if (typeof input === "number") {
    return "Number";
  } else {
    return "String";
  }
};
//Problem-4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
//Problem-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (bookDetails: Book) => {
  return {
    ...bookDetails,
    isRead: true,
  };
};

//Problem-6
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

//Problem-7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const intersection = arr1.filter((val) => arr2.includes(val));
  return intersection;
};

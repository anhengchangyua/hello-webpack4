// import "@babel/polyfill";
// import person from './lib';

// console.log(person);
// class Test {
//   constructor(name) {
//     this.name = name;
//   }

//   logger() {
//     console.log('Hello', this.name);
//   }
// }

// @annotation
// class MyClass {}

// function annotation(target) {
//   target.annotated = true;
// }

// Uncaught ReferenceError: regeneratorRuntime is not defined
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));

// 可以运行
// Object.assign({});
// Array.from([1, 2, 3]);
// new Promise(resolve => console.log('promise'));

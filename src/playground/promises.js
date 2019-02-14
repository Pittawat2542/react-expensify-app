const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is resolved data"); // resolve/reject with only 1 argument
    // resolve("This is other resolved data"); // -> This will be ignore
    reject("Something went wrong");
  }, 1500);
});

console.log("before");

promise.then(data => console.log(data)).then(() => console.log("This also run")).catch(err => console.log(err));

console.log("after");

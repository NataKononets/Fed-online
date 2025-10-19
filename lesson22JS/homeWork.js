window.onload = function() {
  function calculateChain(inputNumber) {
    return Promise.resolve(inputNumber)
      .then((num) => {
        if (typeof num !== 'number' || isNaN(num)) {
        
          throw new TypeError('Input must be a number');
        }
        console.log('Initial value:', num);
        return num;
      })
      .then((num) => {
        const result = num + 5;
        console.log('After adding 5 →', result);
        return result;
      })
      .then((num) => {
        const result = num * 2;
        console.log('After multiplying by 2 →', result);
        return result;
      })
      .then((num) => {
        const result = num - 10;
        console.log('After subtracting 10 →', result);
        return result;
      })
      .catch((err) => {
        console.error('Something went wrong:', err);
      });
  }
    calculateChain(20);
    // calculateChain('test');

    // Task 2
      function convertToUpperCase(text) {
    return new Promise((resolve, reject) => {

      if (typeof text !== "string") {
        reject("Error: Input must be a string!");
      } else {
        console.log("Processing... please wait 2 seconds ⏳");

        setTimeout(() => {
          const result = text.toUpperCase();
          resolve(result);
        }, 2000);
      }
    });
  }
  convertToUpperCase("frontend developer")
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });

  convertToUpperCase(12345)
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
    // Task 3
      function compareNumbers(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number'  || typeof b !== 'number' ||  isNaN(a) || isNaN(b)) {
        reject("Error: Both values must be numbers");
      } else if (a === b) {
        reject("Числа рівні");
      } else if (a > b) {
        resolve(`Number ${a} is greater than ${b}`);
      } else {
        resolve(`Number ${b} is greater than ${a}`);
      }
    });
  }

  console.log('TASK 3');
  compareNumbers(10, 5)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

  compareNumbers(7, 7)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

  compareNumbers("a", 3)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
}
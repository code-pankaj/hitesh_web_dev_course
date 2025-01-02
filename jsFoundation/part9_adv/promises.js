// Function to simulate fetching data (asynchronous operation)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating a delay of 3 seconds
      let success = true; // Change this to false to simulate an error
      if (success) {
        resolve("Data Fetched Successfully"); // Resolves the promise when data is fetched successfully
      } else {
        reject("Error Fetching Data"); // Rejects the promise if there's an error
      }
    }, 3000); // Delay for 3 seconds before resolving or rejecting the promise
  });
}

// Calling the fetchData function and chaining the promise
fetchData()
  .then((data) => {
    // .then() is called when the promise is resolved successfully
    console.log(data); // Logs the successful data
    return data.toLowerCase(); // Returns the data in lowercase for the next .then()
  })
  .then((value) => {
    // This .then() is executed with the result from the previous .then()
    console.log(value); // Logs the lowercase version of the data
  })
  .catch((error) => {
    // .catch() is called when the promise is rejected
    console.error(error); // Logs the error message if the promise is rejected
  });

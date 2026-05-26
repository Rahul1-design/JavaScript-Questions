// Promise => Promise is an object that represents the value that will be available in the future.
// Its three states are i)fullfilled ii)rejeceted iii)pending

// Simple example
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Happy");
  }, 3000);
  const tree = "success";
  if (tree == "success") {
    resolve("Solved Perfectly");
  } else {
    reject("Rejected");
  }
});

prom.then((data) => console.log(data)).catch((error) => console.log(error));

// In real world example

// const res = axios.post("api/register", input, { "Content-type": "Application/json"
// },
// withCredentials: true,
// );
// const data = res.json();

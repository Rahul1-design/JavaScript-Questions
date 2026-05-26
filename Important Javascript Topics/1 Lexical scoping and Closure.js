// Lexical Scopting
// -> The inner function can access the variable of the outer function.
// But the outer function cannot access the variable of the inner function
function outer() {
  let name = "Rahul";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();

// Closure -> The inner function remembers variables from the the outer scope even after the outer function has finished executing

function outerClosure() {
  let count = 0; //this variable lives in the outer's scope
  function innerClosure() {
    count++; //inner remembers count even after outerClosure is done.
    console.log(count);
  }
  return innerClosure;
}

const counter = outerClosure();
counter();
counter();
counter();
counter();

// closure ko matlab purai function nai return garney tara sirf function matrai return hudeina purai lexical scope return hunxa

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(count); // this function closes over count
}, [count]);
// That arrow function inside useEffect is a closure — it remembers count from the outer component scope.

// React
// import React, { useRef } from "react";

// const practise = () => {
//   const ref = useRef();
//   const buttonHandler = () => {
//     document.body.style.backgroundColor = ref.current.value;
//   };
//   return (
//     <div>
//       <input type="text" ref={ref} placeholder="Write Background color" />
//       <Button onClick={buttonHandler}>Change the Color</Button>
//     </div>
//   );
// };

// export default practise;

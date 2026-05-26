// **A component re-renders in 3 situations:

import { useState } from "react";

//? Its state changes
//? Its props change
//? Its parent re-renders

// ?? State changes cause the re-render
function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter rendered"); // watch how many times this logs

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ! Props changes cause the re-render
function Job({ title }) {
  return <div>{title}</div>;
}

function jobList() {
  const [newJob, setNewJob] = useState("Frontend Developer");

  return (
    <div>
      <button onClick={() => setNewJob("Backend Developer")}>Change</button>
      <job title={newJob} />
    </div>
  );
}

// * Parent re-render cause the child re-render
function Child() {
  return (
    <div>
      I am a child i will re-render when the parent re-renders even though
      nothing has changed for me because i am inside the parent.
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

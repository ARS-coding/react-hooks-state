import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0); // the first variable is the variable that has the value of the state. The second variable is the setter function that can change the first variable's(state's) value!

  function increment() {
    setCount((whatever) =>  whatever + 1); // use this callback function if you are gonna need the current state value of the component to make a step by step process because it is an asynchronous function!
    setCount((count) => count + 1); // the parameter name inside the callback function can be whatever you want, react is gonna pass the value of count(which is the STATE value) to callback function as an argument by itself.
  }

  // don't call useState hooks outside of react components such as from regular JS functions! The only two places that you can use react hooks are inside the react components or inside the custom hooks that you are created!!!

  // don't use state hook for everything, keed it as minimal as possible because if there's a lot of states, that means there's a lot of states to track and it limits our flexibility!!

  // don't call react hooks inside loops conditions or nested functions... ONLY CALL THEM AT THE TOP LEVEL because we want it to be called everytime our component gets updated no matter what!! 

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

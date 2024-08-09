import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  let count = useMemo(()=>{
    console.log("hello")
    let ans = 0
    for (let i = 0; i <= input; i++) {
      ans = ans + i;
    }
    return ans
  }, [input])
  
  // change the count to final to see the output
  // const [final, setFinal] = useState(0);

  // useEffect(()=>{
  //   console.log("hello")
  //   let ans = 0;
  //   for(let i=0;i<= input;i++){
  //     ans = ans + i;
  //   }
  //   setFinal(ans)
  // }, [input])

  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <div>
        sum from 0 to {input} is {count}
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;

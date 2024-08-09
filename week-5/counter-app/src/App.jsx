
import {useState} from "react";

function App() {
  const [a, b] = useState({
    "a": 776,
    "b": 76
  }) 

  return (
    <div>{a.a}{b.b}</div>
  )
}

// component

// function CustomBUtton(props) {
//   function onClickHandler(){
//     props.setCount(props.count + 1); 
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }

export default App

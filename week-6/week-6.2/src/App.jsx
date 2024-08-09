// useEffect(() => {
//   axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(res){
//       setTodos(res.data.todos)
//     })
// }, [])

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setNum(1);
        }}
      >
        1
      </button>

      <button
        onClick={function () {
          setNum(2);
        }}
      >
        2
      </button>

      <button
        onClick={function () {
          setNum(3);
        }}
      >
        3
      </button>

      <button
        onClick={function () {
          setNum(4);
        }}
      >
        4
      </button>

      <Todo id={num} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      Id: {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;

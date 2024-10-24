import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const index = list.length;

  function handleSubmit(value) {
    setList((list) => [...list, value]);
  }

  function handelRemove(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <TodoList onSubmit={handleSubmit} />
      {index > 0 && (
        <button className="btn-new" onClick={() => setList([])}>
          New List
        </button>
      )}
      {index > 0 ? (
        <List list={list} onRemove={handelRemove} />
      ) : (
        <p className="par">Add your own To-do list as You like!</p>
      )}
    </div>
  );
}

function TodoList({ onSubmit }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo) return;

    const newTodo = { id: Math.round(Math.random() * 1000), todo };

    onSubmit(newTodo);
    setTodo("");
  }
  return (
    <div className="todo">
      <form action="" onSubmit={handleSubmit}>
        <h1>
          <span className="blck">To-do</span>List
        </h1>
        <input
          type="text"
          value={todo}
          pattern=".*\D.*"
          placeholder="To-do things"
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className="btn btn-add" onClick={() => handleSubmit}>
          ➕
        </button>
      </form>
    </div>
  );
}

function List({ list, onRemove }) {
  return (
    <div className="">
      <ol>
        {list.map((item) => (
          <section className="sec-list" key={item.id}>
            <li>{item.todo}</li>
            <button onClick={() => onRemove(item.id)}>✖️</button>
          </section>
        ))}
      </ol>
    </div>
  );
}

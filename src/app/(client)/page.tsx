"use client";
import { SetStateAction, useState } from "react";
import TodoElement from "./ui/TodoElement";
import "../../styles/TodoPage.css";
import Searchbar from "./ui/Searchbar";

export default function Home() {
  const [todo, setTodo] = useState<
    { id: number; data: string; done: boolean }[]
  >([]);
  const [data, setData] = useState("");
  const [id, setId] = useState(0);

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setData(e.target.value);
  };

  const handleTodo = () => {
    setTodo([...todo, { id: id, data: data, done: false }]);
    setData("");
    setId(id + 1);
  };
  const handleDone = (index: number) => {
    const newTodo = todo.map((item) => {
      if (item.id === index) {
        item.done = !item.done;
      }
      return item;
    });
    setTodo(newTodo);
  };

  console.log(todo);

  const handleRemove = (index: number) => {
    const newTodo = todo.filter((item) => item.id !== index);
    setTodo(newTodo);
    console.log(todo);
  };

  return (
    <div className="todo-container">
      <Searchbar
        data={data}
        handleTodo={handleTodo}
        handleInput={handleInput}
      />

      <TodoElement
        todo={todo}
        handleRemove={handleRemove}
        data={data}
        handleDone={handleDone}
        setTodo={setTodo}
      />
    </div>
  );
}

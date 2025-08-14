import TodoItem from "./components/TodoItem";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const defaultConfig = [
    { text: "Todo item 532", createdAt: 1720078234635 },
    { text: "Todo item 178", createdAt: 1712104312541 },
    { text: "Todo item 849", createdAt: 1726923546671 },
    { text: "Todo item 65", createdAt: 1721476923412 },
  ];

  const [list, setList] = useState(defaultConfig);

  return (
    <div className="App">
      {list?.map((item, idx) => (
        <TodoItem
          key={item?.createdAt}
          id={idx}
          title={item?.text}
          timeStamp={item?.createdAt}
          list={list}
          setList={setList}
        />
      ))}
    </div>
  );
}

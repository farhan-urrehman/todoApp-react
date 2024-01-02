import React from "react";
import { useState } from "react";

function Todo() {
  let [list, setList] = useState([]);
  let [inputText, setInputText] = useState("");

  function updateText(e) {
    setInputText(e.target.value);
  }

  function addItem() {
    let copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
    let inp = document.querySelector(".getInp");
    inp.value = " ";
  }

  function indexFunction(e) {
    let copyList = [...list];
    copyList.splice(e, 1);
    setList(copyList);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div>
      <h1>Todo App.</h1>
      <input className="getInp" onChange={updateText} type="text" />
      <br />
      <button onClick={addItem}>Add Item</button>
      <button onClick={deleteAll}>Delete All</button>

      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value}{" "}
              <button className="delBtn" onClick={() => indexFunction(index)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;

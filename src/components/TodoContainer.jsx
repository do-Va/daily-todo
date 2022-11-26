import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { TodoContent, TodoFooter, TodoHeader } from ".";
import { getFromLocalStorage, addToLocalStorage } from "../utils/localStorage";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getFromLocalStorage("todos", []));

  const addTodo = (value) => {
    setTodos([...todos, { id: todos.length, text: value, isChecked: false }]);
  };

  useEffect(() => {
    addToLocalStorage("todos", todos);
  }, [todos]);

  const checkedTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      })
    );
  };

  const clearTodos = () => {
    setTodos([]);
    addToLocalStorage("todos", todos);
  };

  return (
    <Wrapper className="flex-center">
      <div className="container">
        <TodoHeader addTodo={addTodo} />
        <TodoContent todos={todos} checkedTodo={checkedTodo} />
        <TodoFooter todos={todos} clearTodos={clearTodos} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 0px 4px var(--blue-opacity);

  .container {
    width: 100%;
    max-width: 600px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 72px 20px 48px;
  }
`;

export default TodoContainer;

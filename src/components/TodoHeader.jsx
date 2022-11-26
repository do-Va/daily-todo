import styled from "styled-components/macro";
import TodoForm from "./TodoForm";

const TodoHeader = ({ addTodo }) => {
  return (
    <Wrapper>
      <h2 className="title">Daily to do list</h2>

      <TodoForm addTodo={addTodo} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .title {
    color: var(--title);
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
    font-size: clamp(32px, 10vw, 48px);
    font-weight: 600;
    line-height: 57px;
    margin-bottom: 32px;
  }
`;

export default TodoHeader;

import styled from "styled-components/macro";
import { ReactComponent as Checked } from "../assests/Rectangle.svg";

const TodoItem = ({ id, text, isChecked, checkedTodo }) => {
  return (
    <Wrapper isChecked={isChecked} onClick={() => checkedTodo(id)}>
      <div className="circle">{isChecked && <Checked />}</div>
      <p className="todo-text">{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  & > * {
    transition: var(--transition-all);
  }

  .circle {
    width: 32px;
    height: 32px;
    outline: 1px solid var(--blue-opacity);
    border-radius: 50%;
  }

  &:hover .circle,
  &:hover .todo-text {
    outline-color: ${(props) => !props.isChecked && "var(--todo-hover)"};
    color: ${(props) => !props.isChecked && "var(--todo-hover)"};
  }

  .todo-text {
    font-weight: 500;
    color: ${(props) => props.isChecked && "var(--todo-done)"};
    text-decoration: ${(props) => props.isChecked && "line-through"};
  }
`;

export default TodoItem;

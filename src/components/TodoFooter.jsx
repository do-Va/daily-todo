import styled from "styled-components/macro";
import { selectedItems } from "../utils/functions";

const TodoFooter = ({ todos, clearTodos }) => {
  let count = selectedItems(todos);

  return (
    <Wrapper>
      <p>{count ? `${count} items` : "0 item"} selected</p>
      <button className="clear-btn" onClick={() => clearTodos()}>
        Clear All
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  color: var(--gray);

  .clear-btn {
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: var(--transition-all);
  }

  .clear-btn:hover {
    color: var(--todo-done);
  }
`;

export default TodoFooter;

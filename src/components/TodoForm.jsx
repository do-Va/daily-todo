import styled from "styled-components/macro";

const TodoForm = () => {
  const handleSubmit = (evn) => {
    evn.preventDefault();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add new list item" />
      <button className="btn" type="submit">
        Add
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 7px;

  .input {
    border: none;
    flex: 1;
    outline: none;
    padding-left: 13px;
  }

  .input::placeholder {
    color: var(--gray);
  }

  .btn {
    width: 84px;
    height: 44px;
    border: none;
    border-radius: 4px;
    background-color: var(--todo-hover);
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    transition: var(--transition-all);
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--btn-hover);
  }
`;

export default TodoForm;

import styled from "styled-components/macro";
import TodoItem from "./TodoItem";

const TodoContent = ({ todos, checkedTodo }) => {
  return (
    <Wrapper>
      {todos?.map((item) => (
        <TodoItem key={item.id} {...item} checkedTodo={checkedTodo} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0;
`;

export default TodoContent;

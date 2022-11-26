import styled from "styled-components/macro";
import { TodoContent, TodoFooter, TodoHeader } from ".";

const TodoContainer = () => {
  return (
    <Wrapper className="flex-center">
      <TodoHeader />
      <TodoContent />
      <TodoFooter />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  height: 600px;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 0px 4px rgba(0, 23, 71, 0.15);
`;

export default TodoContainer;

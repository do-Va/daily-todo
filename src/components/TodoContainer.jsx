import styled from "styled-components/macro";
import { TodoContent, TodoFooter, TodoHeader } from ".";

const TodoContainer = () => {
  return (
    <Wrapper className="flex-center">
      <div className="container">
        <TodoHeader />
        <TodoContent />
        <TodoFooter />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  height: 600px;
  background-color: var(--white);
  border-radius: 32px;
  box-shadow: 0px 0px 4px rgba(0, 23, 71, 0.15);

  .container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }
`;

export default TodoContainer;

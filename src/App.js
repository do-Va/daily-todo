import styled from "styled-components/macro";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <Wrapper className="flex-center">
      <TodoContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--bg);
`;

export default App;

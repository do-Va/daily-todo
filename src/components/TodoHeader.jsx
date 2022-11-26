import styled from "styled-components/macro";

const TodoHeader = () => {
  return (
    <Wrapper>
      <h2 className="title">Daily to do list</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    color: var(--title);
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
    font-size: 48px;
    font-weight: 600;
    line-height: 57px;
  }
`;

export default TodoHeader;

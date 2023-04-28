import styled from "styled-components";

export const StyledContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 5vw;
    width: 90vw;
    margin: 0 auto;
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  margin: 0 auto 15px;
  background-color: var(--grey-4);
  display: flex;

  div {
    width: 100%;
    margin: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 100px;
      height: 100px;
    }

    > button {
      padding: 12px 17px;
      border: none;
      border-radius: 5px;
      background-color: var(--grey-3);
      color: var(--grey-4);

      :hover {
        background-color: var(--error);
        color: var(--grey-1);
      }
    }
  }

  @media (min-width: 1070px) {
    justify-content: center;

    div {
      width: 100%;
      max-width: calc(915px + 5vw);
      margin: 0;
    }
  }
`;

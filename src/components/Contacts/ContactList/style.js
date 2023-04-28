import styled from "styled-components";

export const StyledContactListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 90vw;
  max-height: 40vh;
  overflow: auto;

  background-color: var(--white);

  font-family: "Courier New", Courier, monospace;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--grey-1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey-3);
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: var(--grey-3) var(--grey-1);

  -ms-overflow-style: none;
  scrollbar-width: thin;
  scrollbar-color: var(--grey-3) var(--grey-1);

  scrollbar-color: var(--grey-3) var(--grey-1);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 4px;

    > h1 {
      font-weight: 700;
      font-size: 20px;
      color: var(--grey-4);
    }

    > input {
      height: 50px;
      padding: 0px 16px;
      max-width: 160px;

      background-color: var(--grey-4);
      border: 2px solid var(--grey-2);
      border-radius: 8px;

      color: var(--grey-1);

      ::placeholder {
        color: var(--grey-3);
      }
    }
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (min-width: 425px) {
    > div > input {
      max-width: none;
    }
  }
  @media (min-width: 768px) {
    max-width: 560px;
    max-height: 80vh;
  }
`;

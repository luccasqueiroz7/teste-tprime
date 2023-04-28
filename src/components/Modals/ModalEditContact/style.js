import styled from "styled-components";

export const StyledModalEditContactDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  z-index: 999;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;

  background-color: var(--grey-1);
  padding: 20px;
  border-radius: 10px;

  > .headerModalDeleteContact {
    display: flex;
    justify-content: space-between;
    color: var(--grey-4);
    font-weight: 700;

    > button {
      border: none;
    }
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const StyledEditContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  padding: 10px 0;

  background-color: var(--grey-1);

  border: 1px solid var(--grey-1);

  > label,
  button {
    display: flex;
    flex-direction: column;
    margin: 0 21px;
    gap: 5px;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-4);

    > input {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0px 16px;

      border: 2px solid var(--grey-4);
      border-radius: 8px;

      :hover {
        background-color: var(--grey-4);
        color: var(--grey-1);
      }
    }

    > span {
      color: var(--error);
    }
  }

  > button {
    align-items: center;
    justify-content: center;
    height: 48px;

    border: 2px solid var(--grey-4);
    border-radius: 8px;

    background-color: var(--grey-4);

    font-size: 16px;
    color: var(--white);

    :hover {
      background-color: var(--error);
      border: 2px solid var(--error);
    }
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;

import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90vw;
  padding: 30px 0;

  background-color: var(--white);

  border: 1px solid rgba(0, 0, 0, 0.2);

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

      border: 2px solid var(--grey-2);
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
    max-width: 355px;
  }
`;

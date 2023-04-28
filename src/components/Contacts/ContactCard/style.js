import styled from "styled-components";

export const StyledContactCardLi = styled.li`
  font-family: "Courier New", Courier, monospace;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-left: 4px solid var(--grey-4);
  border-right: 4px solid white;
  border-radius: 0 20px 20px 0;
  padding: 14px 8px 14px 8px;

  background-color: var(--grey-2);

  > .detailsContactCard {
    cursor: pointer;

    :hover {
      > h2,
      p {
        color: var(--error);
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 90%;

    > h2 {
      font-weight: 700;
      font-size: 20px;
      color: var(--grey-4);
    }

    > h2,
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > p,
    button {
      font-weight: 400;
      font-size: 12px;
      color: var(--grey-3);
    }

    > button {
      width: fit-content;
      display: flex;
      justify-content: center;

      border: none;
      border-radius: 2px;
      padding: 4px 8px;

      background-color: var(--grey-2);
      color: var(--grey-4);
    }

    > svg {
      cursor: pointer;

      :hover {
        color: var(--error);
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 50vw;
  }

  :hover {
    background-color: var(--grey-3);

    > div > p {
      color: var(--grey-4);
    }
  }
`;

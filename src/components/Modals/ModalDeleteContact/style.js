import styled from "styled-components";

export const StyledModalDeleteContactDiv = styled.div`
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

  > p {
    color: var(--grey-3);
  }
  > .confirmDeleteContact {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const StyledConfirmedButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};

  :hover {
    background-color: ${({ color }) => color};
    color: ${({ background }) => background};
  }
`;

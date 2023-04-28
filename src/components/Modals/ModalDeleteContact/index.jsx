import { StyledConfirmedButton, StyledModalContent, StyledModalDeleteContactDiv } from "./style";

export const ModalDeleteContact = ({ contact, setModal, listOfContacts, setListOfContacts }) => {
  function cancelModal() {
    setModal(false);
  }

  function deleteContact() {
    setListOfContacts(listOfContacts.filter((person) => person.codigo !== contact.codigo));
    setModal(false);
  }

  return (
    <StyledModalDeleteContactDiv>
      <StyledModalContent>
        <div className="headerModalDeleteContact">
          <p>Excluir contato</p>
          <button onClick={cancelModal}>X</button>
        </div>

        <h3>Tem certeza que deseja remover este contato?</h3>

        <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu contato.</p>

        <div className="confirmDeleteContact">
          <StyledConfirmedButton background="#DEE2E6" color="#495057" onClick={cancelModal}>
            Cancelar
          </StyledConfirmedButton>
          <StyledConfirmedButton background="#FDD8D8" color="#CD2B31" onClick={deleteContact}>
            Sim, excluir contato
          </StyledConfirmedButton>
        </div>
      </StyledModalContent>
    </StyledModalDeleteContactDiv>
  );
};

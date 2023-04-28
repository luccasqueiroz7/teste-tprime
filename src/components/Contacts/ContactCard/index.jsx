import { useState } from "react";
import { StyledContactCardLi } from "./style";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { ModalDeleteContact } from "../../Modals/ModalDeleteContact";
import { ModalEditContact } from "../../Modals/ModalEditContact";

export const ContactCard = ({ contact, listOfContacts, setListOfContacts }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <>
      <StyledContactCardLi>
        <div onClick={() => setModalEdit(true)} className="detailsContactCard">
          <h2>{contact.nome}</h2>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.telefone}</p>
        </div>
        <div>
          <AiFillEdit onClick={() => setModalEdit(true)} />
          <FaTrashAlt onClick={() => setModalDelete(true)} />
        </div>
      </StyledContactCardLi>
      {modalDelete && (
        <ModalDeleteContact
          contact={contact}
          setModal={setModalDelete}
          listOfContacts={listOfContacts}
          setListOfContacts={setListOfContacts}
        />
      )}
      {modalEdit && (
        <ModalEditContact
          contact={contact}
          setModal={setModalEdit}
          listOfContacts={listOfContacts}
          setListOfContacts={setListOfContacts}
        />
      )}
    </>
  );
};

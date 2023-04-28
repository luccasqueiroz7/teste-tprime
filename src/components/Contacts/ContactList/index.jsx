import { useState } from "react";
import { ContactCard } from "../ContactCard";
import { StyledContactListDiv } from "./style";

export const ContactList = ({ listOfContacts, setListOfContacts }) => {
  const [searchedName, setSearchedName] = useState("");
  const [searchedNameList, setSearchedNameList] = useState([]);

  function searchName(name) {
    setSearchedName(name);
    const listNames = listOfContacts.filter((contact) => {
      return contact.nome.toLowerCase().includes(searchedName.toLowerCase());
    });
    setSearchedNameList(listNames);
  }

  return (
    <StyledContactListDiv>
      <div>
        <h1>Contatos</h1>
        <input
          type="text"
          placeholder="Pesquise por nome"
          onChange={(e) => searchName(e.target.value)}
        />
      </div>
      {listOfContacts.length > 0 ? (
        <ul>
          {(searchedName.length > 0 && searchedNameList.length > 0
            ? searchedNameList
            : listOfContacts
          ).map((contact) => (
            <ContactCard
              key={contact.codigo}
              contact={contact}
              listOfContacts={listOfContacts}
              setListOfContacts={setListOfContacts}
            />
          ))}
        </ul>
      ) : (
        <h2>Você ainda não possui contatos</h2>
      )}
    </StyledContactListDiv>
  );
};

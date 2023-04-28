import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { phoneMask } from "../../Contacts/ContactForm/phoneMask";
import { StyledEditContactForm, StyledModalContent, StyledModalEditContactDiv } from "./style";
import { useState } from "react";

export const ModalEditContact = ({ contact, setModal, listOfContacts, setListOfContacts }) => {
  const [fieldsError, setFieldsError] = useState("");
  const validationSchema = Yup.object().shape({
    nome: Yup.string(),
    email: Yup.string().email("Por favor, informe um email válido."),
    telefone: Yup.string()
      .nullable()
      .test({
        name: "telefone",
        message: "Telefone inválido",
        test: (value) => !value || /^\(\d{2}\) \d{5}-\d{4}$/.test(value),
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  function onSubmitFunction(data) {
    setListOfContacts(
      listOfContacts.filter((person) => {
        if (person.codigo === contact.codigo) {
          person.nome = data.nome || person.nome;
          person.email = data.email || person.email;
          person.telefone = data.telefone || person.telefone;
        }
        return person;
      })
    );

    if (data.nome.length == 0 && data.email.length == 0 && data.telefone.length == 0) {
      setFieldsError("Preencha pelo menos um campo");
    } else {
      reset();
      setFieldsError("");
      setModal(false);
    }
  }

  return (
    <StyledModalEditContactDiv>
      <StyledModalContent>
        <div className="headerModalDeleteContact">
          <p>Editar contato</p>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <StyledEditContactForm onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            <span>{fieldsError}</span>
            Nome:
            <input placeholder="Digite aqui o nome do contato" type="text" {...register("nome")} />
            <span>{errors.nome?.message}</span>
          </label>

          <label>
            Email:
            <input placeholder="exemplo@mail.com" type="email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </label>

          <label>
            Telefone:
            <Controller
              name="telefone"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={phoneMask(value)}
                  onChange={(e) => onChange(phoneMask(e.target.value))}
                  placeholder="(00) 00000-0000"
                  maxLength="15"
                />
              )}
            />
            <span>{errors.telefone?.message}</span>
          </label>
          <button type="submit">Editar contato</button>
        </StyledEditContactForm>
      </StyledModalContent>
    </StyledModalEditContactDiv>
  );
};

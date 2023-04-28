import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { phoneMask } from "./phoneMask";
import { StyledContactForm } from "./style";

export const ContactForm = ({ listOfContacts, setListOfContacts }) => {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Por favor, informe seu nome."),
    email: Yup.string()
      .email("Por favor, informe um email válido.")
      .required("Por favor, informe seu email."),
    telefone: Yup.string()
      .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido")
      .required("Por favor, informe seu número de telefone."),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  function onSubmitFunction(data) {
    const code =
      listOfContacts.length > 0
        ? "00" + (Number(listOfContacts[listOfContacts.length - 1].codigo) + 1)
        : "001001";
    setListOfContacts([...listOfContacts, { ...data, codigo: code }]);
    reset();
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmitFunction)}>
      <label>
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
      <button type="submit">Adicionar contato</button>
    </StyledContactForm>
  );
};

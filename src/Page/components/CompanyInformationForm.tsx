import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

interface CompanyInformationFormProps {
  handleSubmit: (result: any) => void;
}

const CompanyInformationForm: React.FC<CompanyInformationFormProps> = ({
  handleSubmit,
}) => {
  const [formBasic, setFormBasic] = useState({
    name: "",
    cnpj: "",
    nameResponsible: "",
    phone: "",
    emailPrimary: "",
    emailSecondary: "",
    password: "",
    passwordConfirmation: "",
    stateRegistration: "",
    municipalRegistration: "",
  });

  const handleSubmitCompanyInformation = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    handleSubmit(formBasic);
  };

  return (
    <>
      <div className="flex flex-col items-start p-10 shadow-2xl gap-8 bg-grey-px-50 border border-grey-px-100">
        <h4 className="text-grey-px-800 font-bold text-xl">
          Informações sobre a empresa
        </h4>
        <form
          id="company-information-form"
          className="w-full max-w-full flex flex-col gap-6"
          onSubmit={handleSubmitCompanyInformation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="Nome da Transportadora"
              id="name"
              onChange={e =>
                setFormBasic({ ...formBasic, name: e.target.value })
              }
              value={formBasic.name}
              placeholder="Ex: 123"
            />
            <Input
              label="CNPJ"
              id="cnpj"
              onChange={e =>
                setFormBasic({ ...formBasic, cnpj: e.target.value })
              }
              value={formBasic.cnpj}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="Nome do Responsável"
              id="nameResponsible"
              onChange={e =>
                setFormBasic({ ...formBasic, nameResponsible: e.target.value })
              }
              value={formBasic.nameResponsible}
              placeholder="Ex: 123"
            />
            <Input
              label="Telefone"
              id="phone"
              onChange={e =>
                setFormBasic({ ...formBasic, phone: e.target.value })
              }
              value={formBasic.phone}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="E-mail Principal"
              id="email-primary"
              onChange={e =>
                setFormBasic({ ...formBasic, emailPrimary: e.target.value })
              }
              value={formBasic.emailPrimary}
              type="email"
              placeholder="Ex:123"
            />
            <Input
              label="E-mail Secundário"
              id="email-secondary"
              autoComplete="email"
              onChange={e =>
                setFormBasic({ ...formBasic, emailSecondary: e.target.value })
              }
              value={formBasic.emailSecondary}
              type="email"
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <InputPassword
              label="Alterar Senha"
              id="new-password"
              autoComplete="new-password"
              onChange={e =>
                setFormBasic({ ...formBasic, password: e.target.value })
              }
              value={formBasic.password}
              type="password"
              placeholder="Ex: 123"
            />
            <InputPassword
              label="Confirmar Alteração de Senha"
              id="new-password-confirmation"
              autoComplete="new-password"
              onChange={e =>
                setFormBasic({
                  ...formBasic,
                  passwordConfirmation: e.target.value,
                })
              }
              value={formBasic.passwordConfirmation}
              type="password"
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="Inscrição Estadual"
              id="stateRegistration"
              onChange={e =>
                setFormBasic({
                  ...formBasic,
                  stateRegistration: e.target.value,
                })
              }
              value={formBasic.stateRegistration}
              placeholder="Ex: 123"
            />
            <Input
              label="Inscrição Municipal"
              id="municipalRegistration"
              onChange={e =>
                setFormBasic({
                  ...formBasic,
                  municipalRegistration: e.target.value,
                })
              }
              value={formBasic.municipalRegistration}
              placeholder="Ex: 123"
            />
          </div>
          <div className="flex flex-col flex-wrap px-3  -mx-3 gap-5">
            <label className="block tracking-wide text-grey-px-600 text-base">
              Trocar foto
            </label>
            <div className="flex flex-col justify-center items-center w-full h-full md:w-[31.25rem] sm:h-[6.875rem]  px-7 gap-[0.625rem] border border-dashed border-outline-px">
              <p className="text-sm md:text-base text-grey-px-400">
                Selecione clicando aqui ou arraste e solte o arquivo
              </p>
              <p className="text-sm md:text-base text-grey-px-400">
                PNG, JPG, PDF ou GIF até 10MB
              </p>
            </div>
          </div>
        </form>
      </div>
      <Button formId="company-information-form" marginTop="mt-5">
        Atualizar
      </Button>
    </>
  );
};
export default CompanyInformationForm;

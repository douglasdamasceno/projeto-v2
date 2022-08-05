import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

interface AddressFormProps {
  handleSubmit: (result: any) => void;
}
const AddressForm: React.FC<AddressFormProps> = ({ handleSubmit }) => {
  const [address, setAddress] = useState({
    zipCode: "",
    neighborhood: "",
    street: "",
    number: "",
    city: "",
    complement: "",
    state: "",
  });

  const handleSubmitAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(address);
  };

  return (
    <>
      <div className="flex flex-col items-start p-10 shadow-2xl gap-8 bg-grey-px-50 border rounded-lg border-grey-px-100">
        <h4 className="text-grey-px-800 font-bold text-xl">
          Endereço da empresa
        </h4>
        <form
          id="address-form"
          className="w-full max-w-full flex flex-col gap-6"
          onSubmit={handleSubmitAddress}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="CEP"
              id="zipCode"
              onChange={event => {
                setAddress({ ...address, zipCode: event.target.value });
              }}
              value={address.zipCode}
              placeholder="Ex: 123"
            />
            <Input
              label="Bairro"
              id="neighborhood"
              onChange={event => {
                setAddress({ ...address, neighborhood: event.target.value });
              }}
              value={address.neighborhood}
              placeholder="Ex: 123"
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="flex flex-wrap w-1/2">
              <Input
                label="Nome da Rua"
                id="street"
                onChange={event => {
                  setAddress({ ...address, street: event.target.value });
                }}
                value={address.street}
                placeholder="Ex: 123"
                gridStyle="md:w-2/3"
              />
              <Input
                label="Número"
                id="number"
                onChange={event => {
                  setAddress({ ...address, number: event.target.value });
                }}
                value={address.number}
                placeholder="Ex: 123"
                gridStyle="md:w-1/3"
              />
            </div>
            <Input
              label="Cidade"
              id="city"
              onChange={event => {
                setAddress({ ...address, city: event.target.value });
              }}
              value={address.city}
              placeholder="Ex: 123"
              gridStyle="md:w-1/2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3">
            <Input
              label="Complemento"
              id="complement"
              onChange={event => {
                setAddress({ ...address, complement: event.target.value });
              }}
              value={address.complement}
              placeholder="Ex: 123"
            />
            <Input
              label="Estado"
              id="state"
              onChange={event => {
                setAddress({ ...address, state: event.target.value });
              }}
              value={address.state}
              placeholder="Ex: 123"
            />
          </div>
        </form>
      </div>
      <Button formId="address-form" marginTop="mt-5">
        Atualizar
      </Button>
    </>
  );
};
export default AddressForm;

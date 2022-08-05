import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

interface StateSelect {
  adminCode1: string;
  geonameId: number;
  name: string;
}

const OperationForm: React.FC = () => {
  const [operation, setOperation] = useState({
    amountVeicules: "",
    operationState: "",
  });
  const [stateSelect, setStateSelect] = useState([]);

  const handleSubmitOperation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(operation);
  };
  const handleOperationState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation({ ...operation, operationState: e.target.value });
  };

  useEffect(() => {
    fetch("http://www.geonames.org/childrenJSON?geonameId=3469034")
      .then(response => response.json())
      .then(data => {
        setStateSelect(data.geonames);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-start p-10 shadow-2xl gap-8 bg-grey-px-50 border border-grey-px-100">
        <h4 className="text-grey-px-800 font-bold text-xl">Operação</h4>
        <form
          id="operation-form"
          className="w-full max-w-full flex flex-col gap-6"
          onSubmit={handleSubmitOperation}
        >
          {/* <div className="flex flex-wrap -mx-3 mb-2"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-3 mb-2">
            <Input
              label="Quantos Caminhões?"
              id="name"
              onChange={e =>
                setOperation({ ...operation, amountVeicules: e.target.value })
              }
              value={operation.amountVeicules}
              placeholder="Ex: 22"
            />
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-grey-px-600 text-base mb-4"
                htmlFor="grid-state"
              >
                Quais estados suas operações ocorrem?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-grey-px-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight "
                  id="grid-state"
                  defaultValue=""
                  value={operation.operationState}
                  onChange={handleOperationState}
                >
                  <option
                    value=""
                    disabled
                    className="text-grey-px-300 text-base font-medium"
                  >
                    Selecione uma opção
                  </option>
                  {stateSelect?.map((state: StateSelect) => (
                    <option value={state.name} key={state.geonameId}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Button formId="operation-form" marginTop="mt-8">
        Atualizar
      </Button>
    </>
  );
};

export default OperationForm;

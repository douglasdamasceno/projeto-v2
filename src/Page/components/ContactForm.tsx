import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ContactForm: React.FC = () => {
  const [contactForm, setContactForm] = React.useState({
    trackingContact: "",
    trackingPhone: "",

    replenishmentContact: "",
    replenishmentPhone: "",

    operationContact: "",
    operationPhone: "",

    maintenanceContact: "",
    maintenancePhone: "",

    emailReceiveNFS: "",
    deadlineReceiveNote: "",
  });

  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactForm);
  };
  return (
    <>
      <div className="flex flex-col items-start p-10 shadow-2xl gap-8 bg-grey-px-50 border border-grey-px-100">
        <h4 className="text-grey-px-800 font-bold text-xl">
          Contatos Externos
        </h4>
        <form
          id="contact-form"
          className="w-full max-w-full flex flex-col gap-6"
          onSubmit={handleSubmitContact}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <Input
              label="Contato do Rastreamento"
              id="trackingContact"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  trackingContact: e.target.value,
                })
              }
              value={contactForm.trackingContact}
              placeholder="Ex: 123"
            />
            <Input
              label="Telefone do Rastreamento"
              id="trackingPhone"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  trackingPhone: e.target.value,
                })
              }
              value={contactForm.trackingPhone}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <Input
              label="Contato do Reabastecimento"
              id="replenishmentContact"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  replenishmentContact: e.target.value,
                })
              }
              value={contactForm.replenishmentContact}
              placeholder="Ex: 123"
            />
            <Input
              label="Telefone do Reabastecimento"
              id="replenishmentPhone"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  replenishmentPhone: e.target.value,
                })
              }
              value={contactForm.replenishmentPhone}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <Input
              label="Contato da Operação"
              id="operationContact"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  operationContact: e.target.value,
                })
              }
              value={contactForm.operationContact}
              placeholder="Ex: 123"
            />
            <Input
              label="Telefone da Operação"
              id="operationPhone"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  operationPhone: e.target.value,
                })
              }
              value={contactForm.operationPhone}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <Input
              label="Contato da Manutenção"
              id="maintenanceContact"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  maintenanceContact: e.target.value,
                })
              }
              value={contactForm.maintenanceContact}
              placeholder="Ex: 123"
            />
            <Input
              label="Telefone da Manutenção"
              id="maintenancePhone"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  maintenancePhone: e.target.value,
                })
              }
              value={contactForm.maintenancePhone}
              placeholder="Ex: 123"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <Input
              label="Email para recebimento do NFS-e"
              id="emailReceiveNFS"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  emailReceiveNFS: e.target.value,
                })
              }
              value={contactForm.emailReceiveNFS}
              placeholder="Ex: 123"
            />
            <Input
              label="Dia limite para recebimento da nota"
              id="deadlineReceiveNote"
              onChange={e =>
                setContactForm({
                  ...contactForm,
                  deadlineReceiveNote: e.target.value,
                })
              }
              value={contactForm.deadlineReceiveNote}
              placeholder="Ex: 123"
            />
          </div>
        </form>
      </div>
      <Button formId="contact-form" marginTop="mt-2">
        Atualizar
      </Button>
    </>
  );
};

export default ContactForm;

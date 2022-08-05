import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import FormNavigation, {
  pageInfoNavigation,
} from "./components/FormNavigation";
import Header from "./components/Header";

const CompanyInformationForm = lazy(
  () => import("./components/CompanyInformationForm")
);
const AddressForm = lazy(() => import("./components/AddressForm"));
const OperationForm = lazy(() => import("./components/OperationsForm"));
const ContactForm = lazy(() => import("./components/ContactForm"));

export default function App(props: any) {
  const handleSubmitAddress = (result: any) => {
    console.table(result);
    console.log(result);
  };

  return (
    <div className="px-8">
      <div className="mt-14 mb-3">
        <Header
          title="Atualizar Cadastro"
          availableBalance={3550000}
          amount={9970000}
        />
      </div>
      <div className="mb-7">
        <FormNavigation />
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path={pageInfoNavigation[0].path}
            element={
              <CompanyInformationForm handleSubmit={handleSubmitAddress} />
            }
          />
          <Route
            path={pageInfoNavigation[1].path}
            element={<AddressForm handleSubmit={handleSubmitAddress} />}
          />
          <Route
            path={pageInfoNavigation[2].path}
            element={<OperationForm />}
          />
          <Route path={pageInfoNavigation[3].path} element={<ContactForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}

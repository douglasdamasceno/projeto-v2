import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { i18n } from "./i18n";

import FormNavigation, {
  pageInfoNavigation,
} from "../components/form-navigation";
import { Header } from "../components/header";
import { useI18N } from "../../hooks/i18n";

const CompanyInfoForm = lazy(() => import("../components/company-info-form"));
const AddressForm = lazy(() => import("../components/address-form"));
const OperationForm = lazy(() => import("../components/operations-form"));
const ContactsForm = lazy(() => import("../components/contacts-form"));

export default function App(props: any) {
  const handleSubmitAddress = (result: any) => {
    console.table(result);
    console.log(result);
  };

  const texts = useI18N(i18n);
  return (
    <div className="px-8 pb-8">
      <Header
        pageTitle={texts.title}
        balanceAvailable={3550095}
        amount={9970000}
      />
      <FormNavigation />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path={pageInfoNavigation[0].path}
            element={<CompanyInfoForm handleSubmit={handleSubmitAddress} />}
          />
          <Route
            path={pageInfoNavigation[1].path}
            element={<AddressForm handleSubmit={handleSubmitAddress} />}
          />
          <Route
            path={pageInfoNavigation[2].path}
            element={<OperationForm />}
          />
          <Route path={pageInfoNavigation[3].path} element={<ContactsForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}

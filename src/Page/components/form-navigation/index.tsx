import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { i18n } from "./i18n";

import { useI18N } from "../../../hooks/i18n";

export const pageInfoNavigation = [
  {
    id: 1,
    name: "Dados básicos",
    path: "/form-basic",
  },
  {
    id: 2,
    name: "Endereço da empresa",
    path: "/form-address",
  },
  {
    id: 3,
    name: "Operação",
    path: "/form-operations",
  },
  {
    id: 4,
    name: "Contatos",
    path: "/form-contacts",
  },
];
const FormNavigation: React.FC = () => {
  const location = useLocation();
  const texts = useI18N(i18n);

  const pageInfoNavigation = [
    {
      id: 1,
      name: texts.basicData,
      path: "/form-basic",
    },
    {
      id: 2,
      name: texts.address,
      path: "/form-address",
    },
    {
      id: 3,
      name: texts.operation,
      path: "/form-operations",
    },
    {
      id: 4,
      name: texts.contacts,
      path: "/form-contacts",
    },
  ];
  return (
    <nav className="flex gap-3 md:gap-8 flex-col md:flex-row mb-7">
      {pageInfoNavigation.map(page => (
        <NavLink
          key={page.id}
          to={page.path}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-px-100  w-fit py-2 px-4 rounded-lg "
              : "grey-px-50 border-outline-px w-fit py-2 px-4 rounded-lg border"
          }
        >
          <h6
            className={
              location.pathname === page.path
                ? "text-blue-px-800 text-base"
                : "text-grey-px-700 text-base"
            }
          >
            {page.name}
          </h6>
        </NavLink>
      ))}

      {/* <  
          activeClassName="text-orange-px-500"
          to={`/form`}
          className={
            "bg-blue-px-100 border-grey-px-100 w-fit py-2 px-4 rounded-lg "
          }
        >
          <h6 className="text-blue-px-800">Dados básicos</h6>
        </NavLink>
         */}
    </nav>
  );
};

export default FormNavigation;

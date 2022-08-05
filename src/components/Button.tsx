import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  marginTop: string;
  formId: string;
};

const Button = ({ children, onClick, marginTop, formId }: Props) => {
  return (
    <button
      form={formId}
      className={`
        bg-orange-px-500 w-full md:w-[16rem] h-[3rem] hover:bg-orange-600 text-white font-bold  rounded-lg focus:outline-none focus:shadow-outline
        ${marginTop}`}
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

import { FC } from "react";
import { Props } from "./types";

export const Button: FC<Props> = ({
  children,
  onClick,
  className,
  formId,
  mode,
  type,
  disabled,
  ...rest
}) => {
  const getStyles = () => {
    if (mode === "tertiary") {
      return "bg-transparent text-gray-400 text-bold underline";
    }

    if (mode === "secondary") {
      return "py-1 px-2 bg-orange-400 text-gray-100 text-bold rounded hover:bg-orange-600";
    }

    return "bg-orange-px-500 w-full md:w-[16rem] h-[3rem] hover:bg-orange-600 text-white font-bold  rounded-lg focus:outline-none focus:shadow-outline";
  };

  const styles = getStyles();

  return (
    <button
      form={formId}
      className={`${styles} ${className} ${
        disabled && "bg-gray-400 hover:bg-gray-600"
      }`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

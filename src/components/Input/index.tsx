import { FC } from "react";
import { Props } from "./type";

const Input: FC<Props> = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  autoComplete,
  type = "text",
  className = "",
  ...rest
}) => {
  return (
    <div className={`w-full h-fit flex flex-col gap-4" ${className}`}>
      <label
        className="block tracking-wide text-grey-px-600 text-base mb-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...rest}
        className="w-full px-3 py-2 text-grey-px-300 text-base font-medium bg-grey-px-50 border-outline-px border rounded-lg focus:outline-none"
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

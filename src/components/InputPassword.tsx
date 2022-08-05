import React, { InputHTMLAttributes, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  autoComplete?: string;
}
const InputPassword = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  autoComplete,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleShowPassword = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={"w-full"}>
      <label
        className="block tracking-wide text-grey-px-600 text-base mb-4"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="flex items-center w-full border-outline-px border rounded-lg bg-grey-px-50 pr-4">
        <input
          className="w-full px-3 py-2 text-grey-px-300 text-base font-medium rounded-lg focus:outline-none"
          id={id}
          type={isVisible ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isVisible ? (
          <FiEye
            className="cursor-pointer text-grey-px-700"
            onClick={toggleShowPassword}
            size={18}
          />
        ) : (
          <FiEyeOff
            className="cursor-pointer text-grey-px-700"
            onClick={toggleShowPassword}
            size={18}
          />
        )}
      </div>
    </div>
  );
};

export default InputPassword;

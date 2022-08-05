import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  type?: string;
  gridStyle?: string;
  autoComplete?: string;
}
const Input = ({
  id,
  label,
  onChange,
  value,
  placeholder,
  autoComplete,
  type = "text",
  gridStyle,
}: Props) => {
  return (
    <div className={"w-full px-3 " + gridStyle}>
      <label
        className="block tracking-wide text-grey-px-600 text-base mb-4"
        htmlFor={id}
      >
        {label}
      </label>
      <input
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

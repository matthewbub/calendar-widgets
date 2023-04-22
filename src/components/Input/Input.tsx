import React, { FC } from "react";
import "./Input.styles.css";

interface InputProps {
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  pattern?: string;
}

const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  name,
  id,
  required,
  disabled,
  autoComplete,
  autoFocus,
  pattern
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className + " ent--input"}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      pattern={pattern}
    />
  );
};

export default Input;

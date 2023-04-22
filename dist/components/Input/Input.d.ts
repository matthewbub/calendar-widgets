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
declare const Input: FC<InputProps>;
export default Input;

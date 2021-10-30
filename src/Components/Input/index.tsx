import { InputHTMLAttributes } from "react";
// import { InputBox } from "../../Styles/ComponentsStyles/input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  register: any;
  text: string;
}

export const Input = ({
  label,
  error,
  register,
  text,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input {...register(text)} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );
};

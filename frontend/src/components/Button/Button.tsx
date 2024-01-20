import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className:string
}

const Button = ({ children,className }: Props) => {
  return (
    <button
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;

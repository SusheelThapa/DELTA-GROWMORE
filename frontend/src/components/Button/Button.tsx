import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {children}
    </button>
  );
};

export default Button;

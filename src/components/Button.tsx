import { type ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ type = "button", onClick, children }: ButtonProps) => {
  return (
    <button
      className="bg-gradient-to-br from-zinc-50 to-zinc-100 cursor-pointer text-zinc-950 rounded-lg
    p-2 text-xs"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

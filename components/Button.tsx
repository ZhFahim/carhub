import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  containerStyle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, type, containerStyle, onClick }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`custom-btn ${containerStyle}`}
      disabled={false}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;

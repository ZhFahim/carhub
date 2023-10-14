import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  containerStyle?: string;
  textStyle?: string;
  rightIcon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  title,
  type,
  containerStyle,
  textStyle,
  rightIcon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`custom-btn ${containerStyle}`}
      disabled={false}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && <div className="w-6 h-6 relative">{rightIcon}</div>}
    </button>
  );
};

export default Button;

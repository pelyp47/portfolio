import { MouseEventHandler } from "react";
import "./NavButton.css";

export type NavButtonProps = {
  text: string;
  className: string;
  on_click: MouseEventHandler<HTMLDivElement> | undefined;
};

export const NavButton = ({ text, className, on_click }: NavButtonProps) => {
  return (
    <div className={`nav-button ${className}`} onClick={on_click}>
      {text}
    </div>
  );
};

import { NavButton, NavButtonProps } from "../NavButton/NavButton";
import "./NavMenu.css";

export const NavMenu = ({
  optionList,
  className
}: {
  optionList: NavButtonProps[];
  className: string;
}) => {
  return (
    <div className={`nav-menu ${className}`}>
      {optionList.map((option) => {
        return (
          <NavButton
            key={option.text}
            text={option.text}
            on_click={option.on_click}
            className={`nav-menu__link ${option.className}`}
          />
        );
      })}
    </div>
  );
};

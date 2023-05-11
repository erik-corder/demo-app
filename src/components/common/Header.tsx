import { FC } from "react";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return <div className="header">{title}</div>;
};

export default Header;

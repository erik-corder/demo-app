import { Container } from "@mui/material";
import { FC } from "react";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  return (
    <div className="layout">
      <Header title={title} />
      <Container fixed className="relative">
        <div className="layout-inner">{children}</div>
      </Container>
    </div>
  );
};

export default Layout;

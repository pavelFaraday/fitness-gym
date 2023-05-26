import AnchorLink from "react-anchor-link-smooth-scroll";

// Typing { children }
type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return <AnchorLink>{children}</AnchorLink>;
};

export default ActionButton;

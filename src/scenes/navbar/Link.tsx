import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // ! The "as" keyword is a --Type Assertion-- in TypeScript which tells/forcing the compiler to consider the object as another type than the type the compiler infers the object to be.
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div>
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-primary-500" : ""
        } transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </div>
  );
};

export default Link;

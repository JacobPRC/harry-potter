/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const PageLink = styled(Link)`
  color: #fff;

  &:hover {
    background-image: linear-gradient(
      90deg,
      rgba(127, 9, 9, 1) 0%,
      rgba(255, 197, 0, 1) 12%,
      rgba(238, 225, 23, 1) 24%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

const Header = ({ location }) => {
  return (
    <section
      sx={{
        gridArea: "header",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100%",
        display: location.pathname === "/" ? "none" : "flex",
      }}
    >
      <Link to="/">
        <p>PUSSY</p>
      </Link>

      <PageLink
        sx={{
          fontFamily: "heading",
          fontSize: "2em",
          color: "white",
          marginRight: "2em",
        }}
        to="/houses"
      >
        houses
      </PageLink>
      <PageLink
        sx={{
          fontFamily: "heading",
          fontSize: "2em",
          color: "white",
        }}
        to="/spells"
      >
        Spells
      </PageLink>
    </section>
  );
};

export default Header;

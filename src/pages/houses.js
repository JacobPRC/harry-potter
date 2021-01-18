/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import MainSection from "./../components/site/main-section";

const GET_CHARACTERS = gql`
  query GetCharacters {
    allCharacters {
      data {
        _id
        name
        house
        patronus
        bloodStatus
        role
        school
        deathEater
        dumbledoresArmy
        orderOfThePheonix
        ministryOfMagic
        alias
        wand
        boggart
        animagus
      }
    }
  }
`;

const Houses = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [selectedHouse, setSelectedHouse] = React.useState([]);

  React.useEffect(() => {
    const gryffindor =
      !loading &&
      !error &&
      data.allCharacters.data.filter((char) => char.house === "Gryffindor");
    setSelectedHouse(gryffindor);
  }, [loading, data]);

  const getHouse = (house) => {
    switch (house) {
      case "gryffindor":
        setSelectedHouse(
          !loading &&
            !error &&
            data.allCharacters.data.filter(
              (char) => char.house === "Gryffindor"
            )
        );
        break;
      case "hufflepuff":
        setSelectedHouse(
          !loading &&
            !error &&
            data.allCharacters.data.filter(
              (char) => char.house === "Hufflepuff"
            )
        );
        break;
      case "slytherin":
        setSelectedHouse(
          !loading &&
            !error &&
            data.allCharacters.data.filter((char) => char.house === "Slytherin")
        );
        break;
      case "ravenclaw":
        setSelectedHouse(
          !loading &&
            !error &&
            data.allCharacters.data.filter((char) => char.house === "Ravenclaw")
        );
        break;
      default:
        setSelectedHouse(
          !loading &&
            !error &&
            data.allCharacters.data.filter(
              (char) => char.house === "Gryffindor"
            )
        );
        break;
    }
  };
  return (
    <div
      sx={{
        gridArea: "main",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
        gridAutoRows: "auto",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <MainSection house={selectedHouse} getHouse={getHouse} />
    </div>
  );
};
export default Houses;

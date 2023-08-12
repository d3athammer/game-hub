import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useGames from "../hooks/useGames";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {


  return (
      <Box
        transition="transform 0.2s"
        _hover={{
          transform: "scale(1.05)", // Increase size by 10% when hovered
          cursor: "pointer", // Change cursor to pointer when hovered
        }}
        borderRadius={10}
        overflow="hidden"
      >
        {children}
      </Box>
  );
};

export default GameCardContainer;

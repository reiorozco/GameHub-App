import React from "react";
import { Image, SimpleGrid } from "@chakra-ui/react";

import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

function GameScreenShots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;

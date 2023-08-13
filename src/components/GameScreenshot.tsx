import { SimpleGrid, Image } from '@chakra-ui/react'
import React from 'react'
import useScreenShots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshot = ({gameId}: Props) => {
  const {data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) throw error;

  const screenshots = data?.results.map((screenshot) => (
    <Image key={screenshot.id} src={screenshot.image} />
  ));

  return (
    <SimpleGrid columns={{lg: 2, sm: 1}} spacing={2}>
      {screenshots}
    </SimpleGrid>
  )
}

export default GameScreenshot

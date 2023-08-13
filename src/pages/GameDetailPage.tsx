import { Box, Heading, SimpleGrid, Spinner, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GameAttributes from '../components/GameAttributes';
import GameScreenshot from '../components/GameScreenshot';
import GameTrailer from '../components/GameTrailer';
import ShowMore from '../components/ShowMore';
import useGame from '../hooks/useGame';


const GameDetailPage = () => {
  const { slug } = useParams();
  // adding exclamtion mark to slug to tell typescript that slug is not null
  const {data: game, error, isLoading} = useGame(slug!);
  // const publisher = usePublisher(game?.id)
  // const attributes = GameAttributes(game!);
  if (isLoading) return <Spinner/>;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ShowMore children={game.description_raw} />
        </GridItem>
        <GridItem>
          <GameAttributes game={game} />
          <GameTrailer gameId={game.id} />
          <GameScreenshot gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
    //Nested map for the 4 components? Map the 4 cards with the 4 components and then map each components with their respective data
  );
}

export default GameDetailPage;

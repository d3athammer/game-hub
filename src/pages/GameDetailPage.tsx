import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import DefinitionItem from '../components/DefinitionItem';
import ShowMore from '../components/ShowMore';
import useGame from '../hooks/useGame';
import CriticScore from '../components/CriticScore';
import GameAttributes from '../components/GameAttributes';


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
      <Box p={5}>
        <Heading>{game.name}</Heading>
        <ShowMore children={game.description_raw} />
      </Box>
      <GameAttributes game={game} />
    </>
    //Nested map for the 4 components? Map the 4 cards with the 4 components and then map each components with their respective data
  );
}

export default GameDetailPage;

import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'


const GameDetailPage = () => {
  const { slug } = useParams();
  // adding exclamtion mark to slug to tell typescript that slug is not null
  const {data: game, error, isLoading} = useGame(slug!);

  if (isLoading) return <Spinner/>;
  if (error || !game) throw error;

  return (
    <Box p={5}>
    <Heading>{game.name}</Heading>
    <Text>{game.description_raw}</Text>
    </Box>
  )
}

export default GameDetailPage;

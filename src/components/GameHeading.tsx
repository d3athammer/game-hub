import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'
import useGameQueryStore from '../store'

const GameHeading = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery)
  // Finding the platform name via the platform id using the usePlatforms hook
  const platformName = usePlatform(gameQuery.platformId)

  // Finding the genre name via the genre id using the useGenres hook
  const genreName = useGenre(gameQuery.genreId)


  const heading = `${platformName?.name || ''} ${genreName?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading

import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatforms from '../hooks/usePlatforms'
import useGenres from '../hooks/useGenres'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  // Finding the platform name via the platform id using the usePlatforms hook
  const { data: platforms } = usePlatforms()
  const platformName = platforms.results?.find((p) => p.id === gameQuery.platformId)

  // Finding the genre name via the genre id using the useGenres hook
  const { data: genres } = useGenres()
  const genreName = genres.results?.find((g) => g.id === gameQuery.genreId)


  const heading = `${platformName?.name || ''} ${genreName?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading

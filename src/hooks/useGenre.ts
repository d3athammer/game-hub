import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data.results?.find((item) => item.id === id);
};

export default useGenre;

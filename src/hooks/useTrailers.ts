import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  //This is the link you are fetching
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    //queryKey is the key for your query. You can set it to anything you want
    //queryKey takes in
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;

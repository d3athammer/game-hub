import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";

const useScreenShots = (gameId: number) => {
  //This is the link you are fetching
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    //queryKey is the key for your query. You can set it to anything you want
    //queryKey takes in
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;

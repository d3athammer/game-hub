import APIClient from "../services/api-client";
import { Game } from "../entities/Game";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  //useQuery is a hook that takes in a query key and a query function
  //We are using "games" as the query key because we are fetching a single game
  //I've created a get method in the api-client.ts file that takes in an id and fetches a single game
  //I can then use it in GameDetailPage to fetch a single game
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;

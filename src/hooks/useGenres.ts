import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;

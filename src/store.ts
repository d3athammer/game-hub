import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  description?: string;
}

interface GameQueryStore {
  // Take the type of the state as generic argument
  gameQuery: GameQuery;
  // Define setters that take the type of the state as argument
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) => set({ gameQuery: { searchText } }),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setDescription: (description: string) => set({ gameQuery: { description } }),
}));

export default useGameQueryStore;

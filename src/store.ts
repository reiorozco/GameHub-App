import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;

  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((setState) => ({
  gameQuery: {},

  setGenreId: (genreId) =>
    setState((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId) =>
    setState((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSortOrder: (sortOrder) =>
    setState((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),

  setSearchText: (searchText) =>
    setState(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;

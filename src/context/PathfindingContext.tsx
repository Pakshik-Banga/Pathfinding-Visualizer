import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType} from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void; 
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}
 
export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");

  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};

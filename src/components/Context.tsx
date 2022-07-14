import { FC, createContext, useContext } from "react";

import { IContextProps } from "../interfaces/props/IContextProps";
import { IContextProviderProps } from "../interfaces/props/IContextProviderProps";
import { ITrackpoint } from "../interfaces/ITrackpoint";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

const AppContext = createContext<IContextProps>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const initialTrackpoint: ITrackpoint = {
  id: uuid(),
  timeStamp: new Date().toJSON(),
  distance: 0,
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [trackpoints, setTrackpoints] = useLocalStorage("trackpoints", [initialTrackpoint]);

  const contextValue = {
    trackpoints: trackpoints,
    updateTrackpoints: setTrackpoints,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;

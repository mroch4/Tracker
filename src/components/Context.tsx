import React, { FC, createContext, useContext, useState } from "react";

import { IContextProps } from "../interfaces/IContextProps";
import { IContextProviderProps } from "../interfaces/IContextProviderProps";
import { ITrackpoint } from "../interfaces/ITrackpoint";
import { trackpointsDatabase } from "../common/trackpoints";

const AppContext = createContext<IContextProps | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const initial = {
  trackpoints: trackpointsDatabase,
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [trackpoints, setTrackpoints] = useState<ITrackpoint[]>(initial.trackpoints);

  const contextValue = {
    trackpoints: trackpoints,
    updateTrackpoints: setTrackpoints,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;

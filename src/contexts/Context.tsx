import { FC, createContext, useContext, useEffect, useState } from "react";

import { IContextProps } from "./IContextProps";
import { IContextProviderProps } from "./IContextProviderProps";
import { ITrackpoint } from "../interfaces/ITrackpoint";
import { LABELS } from "../labels/Labels";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

const AppContext = createContext<IContextProps>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const getLabelsPack = (countryCode: string) => {
  const labelsPackage = LABELS.find((set) => set.intl === countryCode);
  return labelsPackage.labels;
};

export const initialTrackpoint: ITrackpoint = {
  id: uuid(),
  timeStamp: new Date().toJSON(),
  distance: 0,
};

const initialCountryCode = "pl-PL";
const initial = {
  trackpoint: initialTrackpoint,
  labelsPackage: getLabelsPack(initialCountryCode),
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [trackpoints, setTrackpoints] = useLocalStorage("trackpoints", [initial.trackpoint]);
  const [intl, setIntl] = useState<string>(initialCountryCode);
  const [labelsPackage, setLabelsPack] = useState(initial.labelsPackage);

  useEffect(() => {
    const labelsPackage = getLabelsPack(intl);
    setLabelsPack(labelsPackage);
  }, [intl]);

  const contextValue = {
    trackpoints: trackpoints,
    updateTrackpoints: setTrackpoints,
    intl: intl,
    changeIntl: setIntl,
    labels: labelsPackage,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;

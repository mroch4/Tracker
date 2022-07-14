import { useEffect, useState } from "react";

import { ITrackpoint } from "../interfaces/ITrackpoint";

export default function useLocalStorage(key: string, defaultValue: ITrackpoint[]) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

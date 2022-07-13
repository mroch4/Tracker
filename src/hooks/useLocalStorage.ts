import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

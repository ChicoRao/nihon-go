import { useState, useEffect } from "react";

type KeyCallback = (key: string) => void;

const isAlphanumeric = (key: string): boolean => /^[a-zA-Z0-9]$/.test(key);

const useKeyPress = (callback?: KeyCallback): string | null => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      const { key } = event;

      if (isAlphanumeric(key)) {
        setKeyPressed(key);
        callback?.(key);
      }
    };

    const upHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [callback]);

  return keyPressed;
};

export default useKeyPress;

import {useCallback, useState} from 'react';

type ToggleTuple = [
  bool: boolean,
  setTrue: () => void,
  setFalse: () => void,
  toggle: (value?: unknown) => void,
];

export const useToggle = (
  initialValue: boolean | (() => boolean) = false,
): ToggleTuple => {
  const [bool, setBool] = useState(initialValue);
  const setTrue = useCallback(() => setBool(true), []);
  const setFalse = useCallback(() => setBool(false), []);
  const toggle = useCallback((newBool: unknown) => {
    if (typeof newBool === 'boolean') {
      setBool(newBool);
    }
    setBool(value => !value);
  }, []);

  return [bool, setTrue, setFalse, toggle];
};

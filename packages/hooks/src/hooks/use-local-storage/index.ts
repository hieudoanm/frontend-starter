import { useState } from 'react';

const parseJSON = <T>(jsonString: string, fallbackValue: T) => {
  try {
    return jsonString ? JSON.parse(jsonString) : fallbackValue;
  } catch (error) {
    console.error(error);
    return fallbackValue;
  }
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    // Get from local storage by key
    const item: string = window.localStorage.getItem(key) || '';
    // Parse stored json or if none return initialValue
    return parseJSON(item, initialValue);
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

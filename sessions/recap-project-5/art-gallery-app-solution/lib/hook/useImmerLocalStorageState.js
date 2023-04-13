import produce, { freeze } from "immer";
import { useCallback } from "react";
import useLocalStorageState from "use-local-storage-state";

export function useImmerLocalStorageState(key, options) {
  const [value, setValue] = useLocalStorageState(key, {
    ...options,
    defaultValue: freeze(options.defaultValue),
  });

  return [
    value,
    useCallback(
      (updater) => {
        if (typeof updater === "function") setValue(produce(updater));
        else setValue(freeze(updater));
      },
      [setValue]
    ),
  ];
}

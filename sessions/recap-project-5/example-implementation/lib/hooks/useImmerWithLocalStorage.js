import { useMemo } from "react";
import { produce } from "immer";
import useLocalStorageState from "use-local-storage-state";

export function useImmerWithLocalStorage(key, defaultValue) {
  const [data, setData] = useLocalStorageState(key, {
    defaultValue,
  });
  const updateData = useMemo(() => produce(setData), [setData]);
  return [data, updateData];
}

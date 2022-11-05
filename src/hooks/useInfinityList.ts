import { useState } from "react";

export function useInfinityList<T>(
  initialList: T[],
  fetchData: () => Promise<T[]>
) {
  const [list, setList] = useState<T[]>(initialList);

  async function fetchMoreData() {
    const newData = await fetchData();
    setList([...list, ...newData]);
  }

  return {
    list,
    fetchMoreData,
  };
}

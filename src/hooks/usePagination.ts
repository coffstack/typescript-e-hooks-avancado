import { useEffect, useState } from "react";

export function usePagination<T>(fetchData: (page: number) => Promise<T[]>) {
  const [page, setPage] = useState(1);
  const [list, setList] = useState<T[]>([]);

  async function fetchMore() {
    const list = await fetchData(page);
    setPage((prev) => prev + 1);
    setList((prev) => [...prev, ...list]);
  }

  useEffect(() => {
    fetchData(page).then((list) => {
      setList(list), setPage((prev) => prev + 1);
    });
  }, []);

  return { list, fetchMore };
}

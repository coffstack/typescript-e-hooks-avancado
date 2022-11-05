import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { Episode } from "../../models/Episode";
import { EpisodeCard } from "./EpisodeCard";

export function EpisodeList() {
  const [page, setPage] = useState(1);
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);

  async function fetchMore() {
    const list = await api.getEpisode(page);
    setPage((prev) => prev + 1);
    setEpisodeList((prev) => [...prev, ...list]);
  }

  useEffect(() => {
    api.getEpisode(page).then((list) => {
      setEpisodeList(list), setPage((prev) => prev + 1);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Episódios</h1>

      {episodeList.map((episode, index) => (
        <EpisodeCard index={index} key={episode.id} episode={episode} />
      ))}
      <Button title="Mais..." onClick={fetchMore}>
        Carregar Mais...
      </Button>
    </div>
  );
}

import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { usePagination } from "../../hooks/usePagination";
import { EpisodeCard } from "./EpisodeCard";

export function EpisodeList() {
  const { list, fetchMore } = usePagination(api.getEpisodes);

  return (
    <div>
      <h1>Lista de Episódios</h1>

      {list.map((episode, index) => (
        <EpisodeCard index={index} key={episode.id} episode={episode} />
      ))}
      <Button title="Mais..." onClick={fetchMore}>
        Carregar Mais...
      </Button>
    </div>
  );
}

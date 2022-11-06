import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { usePagination } from "../../hooks/usePagination";

import { CharacterCard } from "./CharacterCard";

export function CharacterList() {
  const { list, fetchMore } = usePagination(api.getCharacters);

  return (
    <div>
      <h1>Lista de Personagens</h1>

      {list.map((character, index) => (
        <CharacterCard index={index} key={character.id} character={character} />
      ))}
      <Button title="Mais..." onClick={fetchMore}>
        Carregar Mais...
      </Button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { api } from "../../api/api";
import { Character } from "../../models/Character";
import { CharacterCard } from "./CharacterCard";

export function CharacterList() {
  const [page, setPage] = useState(1);
  const [characterList, setCharacterList] = useState<Character[]>([]);

  async function fetchMore() {
    const list = await api.getCharacters(page);
    setPage((prev) => prev + 1);
    setCharacterList((prev) => [...prev, ...list]);
  }

  useEffect(() => {
    api.getCharacters(page).then((list) => {
      setCharacterList(list), setPage((prev) => prev + 1);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Personagens</h1>

      {characterList.map((character, index) => (
        <CharacterCard index={index} key={character.id} character={character} />
      ))}
      <Button title="Mais..." onClick={fetchMore}>
        Carregar Mais...
      </Button>
    </div>
  );
}

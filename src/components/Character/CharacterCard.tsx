import { Image } from "react-bootstrap";
import { Character } from "../../models/Character";

import { Container, Content } from "./styles";

interface Props {
  character: Character;
  index: number;
}

export function CharacterCard({ character, index }: Props) {
  return (
    <>
      <Container>
        <Image width={100} roundedCircle src={character.image} />
        <Content>
          <h5>
            {character.name} ({index + 1})
          </h5>
          <div>
            <p>Espécie: {character.species}</p>
          </div>
        </Content>
      </Container>
    </>
  );
}

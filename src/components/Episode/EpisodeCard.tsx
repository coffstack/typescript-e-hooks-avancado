import { Episode } from "../../models/Episode";

import { Container, Content } from "./styles";

interface Props {
  episode: Episode;
  index: number;
}

export function EpisodeCard({ episode, index }: Props) {
  return (
    <Container>
      <Content>
        <h5>
          {episode.name} ({index + 1})
        </h5>
        <div>
          <p>Foi ao ar em: {episode.air_date}</p>
        </div>
      </Content>
    </Container>
  );
}

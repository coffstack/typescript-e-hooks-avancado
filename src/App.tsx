import { useState } from "react";
import { Button } from "react-bootstrap";

import "./App.css";
import { CharacterList } from "./components/Character/CharacterList";
import { EpisodeList } from "./components/Episode/EpisodeList";

function App() {
  const [page, setPage] = useState<"character" | "episode">("character");

  function togglePage() {
    if (page === "character") {
      setPage("episode");
    } else {
      setPage("character");
    }
  }

  const renderComponent = {
    character: <CharacterList />,
    episode: <EpisodeList />,
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 30, left: 30 }}>
        <Button variant="success" size="lg" onClick={togglePage}>
          {page === "character" ? "Episódios" : "Personagens"}
        </Button>
      </div>

      <div className="App">{renderComponent[page]}</div>
    </div>
  );
}

export default App;

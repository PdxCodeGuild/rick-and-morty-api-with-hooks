import React, { useState } from 'react';
import { Button } from "react-bulma-components";

import useFetchCharacters from './hooks/useFetchCharacters';
import Character from './Character';

import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [loading, characters] = useFetchCharacters(page);

  return (
    <div>
      <div>Page #{page}</div>
      <div>
        <Button color="info" onClick={() => setPage(Math.max(1, page - 1))}>
          Previous Page
        </Button>
        <Button color="info" onClick={() => setPage(page + 1)}>
          Next Page
        </Button>
      </div>
      {loading && <div>Loading...</div>}
      <div className="App-characters">
        {!loading && characters.map((character) => (
          <Character key={character.id} data={character} />
        ))}
      </div>
    </div>
  );
}

export default App;

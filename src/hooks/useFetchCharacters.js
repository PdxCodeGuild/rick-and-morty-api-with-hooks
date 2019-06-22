import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCharacters = (page = 1) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      console.log(data);
  
      setCharacters(data.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  return [loading, characters];
}

export default useFetchCharacters;
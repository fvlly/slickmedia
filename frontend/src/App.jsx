import { useState, useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import omdb from "./omdb";
import MovieCategory from "./components/movies/MovieCategory";
import MovieList from "./components/movies/MovieList";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("superman");

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const fetchMovies = await omdb.get("", {
          params: {
            s: searchTitle,
          },
        });

        //destructuring out fetched data
        const {
          data: { Search: foundMovies },
        } = fetchMovies;

        if (foundMovies) {
          console.log(foundMovies);
          setMovies(foundMovies);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    if (searchTitle) searchMovies();
  }, [searchTitle]);

  return (
    <>
      <ChakraProvider>
        <Header />
        <Hero />
        <Container maxW='1440'>
          <SearchBar handleChange={setSearchTitle} />
          <MovieCategory movies={movies} />
          <MovieList movies={movies} />
          <MovieCategory movies={movies} />
          <MovieList movies={movies} />
        </Container >
      </ChakraProvider>
    </>
  );
}

export default App;

import { HStack } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  //helper
  const renderMovies = () => {
    if (!movies) {
      return (
        <HStack mb={[8, 8, 12]} overflowX="auto" style={{}}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </HStack>
      );
    }

    return (
      <HStack mb={[8, 8, 12]} overflowX='auto'>
        {movies.map(({ Title, Poster, imdbID }) => {
          return <MovieCard key={imdbID} title={Title} poster={Poster} />;
        })}
      </HStack>
    );
  };
  return renderMovies();
};

export default MovieList;

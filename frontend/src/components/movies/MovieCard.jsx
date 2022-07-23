import { Center, Text } from "@chakra-ui/react";

const MovieCard = ({ title, poster }) => {
  return (
    <Center 
      bgImage={poster && `url(${poster})`}
      borderRadius={[10, 12]}
      minW={[200, 200, 300]}
      height={[200, 200, 300]}
      p={[2, 2, 3]}
      bgColor="black"
    >
      <Text color="white" fontSize={[18, 18, 24]}>
        {title}
      </Text>
    </Center>
  );
};

export default MovieCard;

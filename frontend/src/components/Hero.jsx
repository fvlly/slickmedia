import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      h={[257,257, 550]}
      justify="center"
      align="center"
      bgImage={["url('../../images/heroSmall.png')","url('../../images/heroMedium.png')","url('../../images/heroLarge.png')"]}
      bgSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Flex
      direction={['row','row','column']}
        justify="center"
        align={['center']}
        gap="2"
        wrap={["wrap","wrap","nowrap"]}
        w={["70%","70%","100%"]}
        color="white"
        fontWeight="700"
        fontFamily="DM Sans,sans-serif"
        fontSize={[28, 33,72]}
      >
        <Text>Watch</Text>
        <Text>something</Text>
        <Text>Interesting</Text>
      </Flex>
    </Flex>
  );
};

export default Hero;

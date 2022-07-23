import { Flex,Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Flex bg="gray.600" alignItems='center' justify='center'  h={[16,140]}  >
        <Flex justify='center' align='center' w='108px' h={[8,12]} border='1px' borderColor='whiteAlpha.400'>
          <Text fontWeight='500' color="white">MyTestApp</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;

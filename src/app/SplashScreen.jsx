import React from 'react';
import { Flex, Heading, Image, Spinner, Text, VStack } from '@chakra-ui/react';
import Logo from '../assets/logo.svg';

const SplashScreen = () => (
  <Flex
    flexDirection="column"
    flex={1}
    alignItems="center"
    justifyContent="center"
  >
    <VStack alignItems="center" justifyContent="center" spacing={4} mb={12}>
      <Image src={Logo} boxSize={36} />
      <Heading as="h1" size="2xl" letterSpacing="wide" fontFamily="title">
        Animal
        <Text as="span" color="blue.300">
          Snap
        </Text>
      </Heading>
    </VStack>
    <Spinner
      size="xl"
      thickness="4px"
      speed="0.66s"
      color="blue.400"
      emptyColor="blackAlpha.300"
    />
  </Flex>
);

export default SplashScreen;

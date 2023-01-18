import { VStack, Image, Center, Text } from "native-base";

import backgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg";


export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <Logo />

        <Text color="gray.100">
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  )
}
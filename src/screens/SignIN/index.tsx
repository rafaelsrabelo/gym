import { VStack, Image, Center, Text, Heading } from "native-base";

import backgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";


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

      <Heading color="gray.100" fontSize="xl" fontFamily="heading" textAlign="center" mb={4}>
        Acesse sua conta
      </Heading>
      <Input placeholder="Email"/>
      <Input placeholder="Senha"/>
    </VStack>
  )
}
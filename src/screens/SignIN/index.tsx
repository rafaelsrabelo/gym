import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";

import backgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <VStack flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        {/* <Logo /> */}
        <Heading color="white" fontSize="3xl">My trainning!💪</Heading>

        <Text color="gray.100">
          Faça o acompanhamento de seus treinos
        </Text>
      </Center>

      <Heading color="gray.100" fontSize="xl" fontFamily="heading" textAlign="center" mb={4}>
        Acesse sua conta
      </Heading>
      <Center p={8}>
      <Input placeholder="Email"/>
      <Input placeholder="Senha" />
          <Button title="Acessar" />
        </Center>
      <Center p={8}>
        <Text color="white" mb={3}>Ainda não tem acesso?</Text>    
        <Button title="Criar conta" variant="outline" />
      </Center>
      </VStack>
    </ScrollView>
      
  )
}
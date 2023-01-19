import { Center, Heading, Image, ScrollView, Text, View, VStack } from "native-base";
import backgroundImg from "@assets/background.png"
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack bg="gray.700" flex="1">

        <Image
          source={backgroundImg}
          position="absolute"
          alt="Pessoas treinando"
          resizeMode="contain"
        />
      
      <Center my={16}>
        <Heading color="white">
          My trainning! 💪
        </Heading>
        <Text color="gray.100">
          Faça o acompanhamento dos seus treinos!
        </Text>  
      </Center>

      <Center>
        <Text color="gray.100" fontSize="xl" fontFamily="heading" textAlign="center" mb={4}>Crie sua conta</Text>
      </Center>

      <Center p={8}>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />

        <Button title="Criar e acessar" />  
          <Button title="Voltar para o login" variant={"outline"} mt={8} />  
      </Center>  
      
      </VStack>
    </ScrollView>
  )
}
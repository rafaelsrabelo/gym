import { Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useState } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  const [name, setName] = useState('Rafael')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        fontsLoaded ? <Text>Hello, {name} </Text> : <View />
      }
    </View>
  );
}

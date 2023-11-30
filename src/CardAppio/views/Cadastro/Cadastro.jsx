import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import SocialButtons from '../../components/SocialButtons';


const Login = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}> CardAppio </Text>

        <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}> Crie sua conta! </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Senha"
            textContentType='password'
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Confirmar senha"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={[styles.button, { backgroundColor: '#931603' }]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          > Cadastrar </Button>
          <Button
            mode="contained"
            style={styles.button}
            color='white'
            onPress={() => navigation.goBack()}
          > Cancelar </Button>
        </View>

        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white', margin: 16 }}> Ou cadastre-se com </Text>

        <SocialButtons />

      </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
    color: "#fff",
    marginVertical: 60,
  },
  input: {
    margin: 12,
    color: '#fff',
  },
  inputContainer: {
    margin: 16,
  },
  buttonContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    marginBottom: 8,
    marginHorizontal: 16,
    fontWeight: '700',
  },
})

export default Login;

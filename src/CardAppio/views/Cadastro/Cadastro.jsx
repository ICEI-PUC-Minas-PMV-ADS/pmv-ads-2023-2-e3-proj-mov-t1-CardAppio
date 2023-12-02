import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import SocialButtons from '../../components/SocialButtons';
import { register } from '../../services/auth.services';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password,
    }).then(res => {
      if (res) {
        Alert.alert('Atenção!', 'Usuário cadastrado com sucesso!', [
          { text: "OK", onPress: () => navigation.goBack() }
        ])
      } else {
        Alert.alert('Atenção!', 'Usuário não cadastrado! Tente novamente mais tarde')

      }
    });

  }

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
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            textContentType='password'
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            onChangeText={setPasswordConfirmation}
            value={passwordConfirmation}
            placeholder="Confirmar senha"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={[styles.button, { backgroundColor: '#931603' }]}
            onPress={handleRegister}
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

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Image, TouchableOpacity } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { useUser } from '../../context/UserContext';
import SocialButtons from '../../components/SocialButtons';
import { login } from '../../services/auth.services';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setSigned, setName } = useUser();
  const navigation = useNavigation();

  const handleLogin = () => {

    login({
      email: email,
      password: password,
    }).then(res => {
      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
      } else {
        Alert.alert('Atenção!', 'Email/Senha inválidos')

      }
    });

  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}> CardAppio </Text>
        <View style={styles.inputContainer}>
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
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={[styles.button, { backgroundColor: '#931603' }]}
            onPress={handleLogin}
          > Login </Button>
          <Button
            mode="contained"
            style={styles.button}
            color='white'
            onPress={() => navigation.goBack()}
          > Cancelar </Button>
        </View>

        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white', margin: 16 }}> Ou faça login com </Text>


        <SocialButtons />
      </View>
    </TouchableWithoutFeedback >
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
    marginHorizontal: 20,
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 16,
    fontWeight: '700',
  },
})

export default Cadastro;

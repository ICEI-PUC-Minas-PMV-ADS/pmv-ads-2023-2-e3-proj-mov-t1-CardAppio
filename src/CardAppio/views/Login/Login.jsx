import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper';


const Cadastro = () => {
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Email"
            keyboardType="Text"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Senha"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={[styles.button, { backgroundColor: '#931603' }]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          > Login </Button>
          <Button
            mode="contained"
            style={styles.button}
            color='white'
            onPress={() => navigation.goBack()}
          > Cancelar </Button>
        </View>

        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white', margin: 16 }}> Ou faça login com </Text>

        <View style={styles.socialContainer}>
          <Button
            icon={'google'}
            mode='contained'
            style={styles.socialButton}
            color='#fff'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          > Google </Button>
          <Button
            mode='contained'
            icon={'facebook'}
            style={styles.socialButton}
            color='#fff'
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          > Facebook </Button>

        </View>

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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    backgroundColor: 'white',
  },
})

export default Cadastro;

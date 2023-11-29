import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';

const Inicial = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>CardAppio</Text>

      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: '#931603' }]}
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        color="white"
        onPress={() => navigation.navigate('Cadastro')}
      >
        Sign up
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1B1B',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginBottom: 8,
    marginHorizontal: 16,
    fontWeight: '700',
  },
});
export default Inicial;

import React from 'react'
import{View, Text, StyleSheet, TextInput, Button } from 'react-native'


const Login = () => {
   const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

return (
<View style={style.container}>
   <Text style={style.text}> CardAppio </Text>
   
    <TextInput
      style={style.input}
        onChangeText={onChangeText}
        value={text}
         placeholder="Email"
        keyboardType="Text"
      />
      <TextInput
        style={style.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
    <Button 
    style={style.container}
        title="LOGIN"
        color="#F40000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

      <Text style={style.textb}> Ou faça login com</Text>
      
      <View style={style.fixToText}>
       <Button
        title="GOOGLE"
        color="#F40000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Button
        title="FACEBOOK"
        color="#F40000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    
      </View>
     
</View>
);  

}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#1B1B1B',
  },
  text:{
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
    color: "#fff",
    marginVertical: 60,
  },
   input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 10,
    
  },
  textb: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 20,
    color: "#fff",
    marginVertical: 60,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     margin: 30,
  },
 
  
})

export default Login;

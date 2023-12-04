import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { useUser } from '../../context/UserContext';
import { CustomerContext } from '../../context/CustomerContext';

const Customer = () => {
    const {
        name,
        table,
        handleChangeName,
        handleChangeTable,
    } = useContext(CustomerContext);

    const { setSigned } = useUser();
    const navigation = useNavigation();

    return (
        <CustomerContext.Provider value={({ name, table, handleChangeName, handleChangeTable })}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <View style={styles.container}>
                    <Text style={styles.title}> CardAppio </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChangeName}
                            value={name}
                            placeholder="Insira seu nome"
                            returnKeyType='done'
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChangeTable}
                            value={table}
                            placeholder="Insira sua mesa"
                            keyboardType='numeric'
                            returnKeyType='done'
                            maxLength={2}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            style={[styles.button, { backgroundColor: '#931603' }]}
                            onPress={() => setSigned(true)}
                        > Ver Cardápio </Button>
                        <Button
                            mode="contained"
                            style={styles.button}
                            color='white'
                            onPress={() => navigation.goBack()}
                        > Cancelar </Button>
                    </View>


                </View>
            </TouchableWithoutFeedback >
        </CustomerContext.Provider>
    );
}

export default Customer;

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



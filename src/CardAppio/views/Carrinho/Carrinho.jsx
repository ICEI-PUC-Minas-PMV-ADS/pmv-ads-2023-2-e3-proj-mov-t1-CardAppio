import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, } from "react-native";
import Header from '../../components/Header/Header';
import { Appbar, Button, Divider, IconButton } from 'react-native-paper';

const Pedidos = () => {

    const [number, setNumber] = useState(0)
    const [totalPedido, setTotalPedido] = useState(0)

    function increment() {
        setNumber(number + 1);
        setTotalPedido(totalPedido + 20.99);
    }

    function decrease() {
        if (number > 0) {
            setNumber(number - 1);
            setTotalPedido(totalPedido - 20.99);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>

            {/* Body Up */}
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }} style={styles.produtoImg} />
                    <Text style={{
                        lineHeight: 35,
                        paddingLeft: 12,
                        color: 'white',
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Lorem ipsum dolor sit amet</Text>{'\n'}
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$ 20,00</Text>
                    </Text>
                    <View style={styles.quantidadeButtons}>
                        <TouchableOpacity onPress={decrease} >
                            <IconButton
                                icon='minus'
                                color='white'
                                size={16}
                                onPress={() => { }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.quantidade}>{number}</Text>
                        <TouchableOpacity onPress={increment} >
                            <IconButton
                                icon='plus'
                                color='white'
                                size={16}
                                onPress={() => { }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <Divider style={styles.divider} />

                <View style={{ flexDirection: 'row', }}>
                    <Image source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }} style={styles.produtoImg} />
                    <Text style={{
                        lineHeight: 35,
                        paddingLeft: 12,
                        color: 'white',
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Lorem ipsum dolor sit amet</Text>{'\n'}
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$ 20,00</Text>
                    </Text>
                    <View style={styles.quantidadeButtons}>
                        <TouchableOpacity onPress={decrease} >
                            <IconButton
                                icon='minus'
                                color='white'
                                size={16}
                            />
                        </TouchableOpacity>
                        <Text style={styles.quantidade}>{number}</Text>
                        <TouchableOpacity onPress={increment} >
                            <IconButton
                                icon='plus'
                                color='white'
                                size={16}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity>
                        <Button
                            mode='outlined'
                            color='white'
                            style={styles.addButton}
                        >
                            ADICIONAR MAIS ITENS
                        </Button>
                    </TouchableOpacity>
                </View>

                <View style={styles.totalContainer}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{
                            color: "white",
                            fontSize: 16,
                            marginBottom: 12,
                            justifyContent: 'space-between'
                        }}>
                            Total do pedido:
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: '800',
                            }}
                        >
                            R$ {totalPedido.toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Button
                            mode='contained'
                            color={'#931603'}
                            style={{ borderRadius: 10, padding: 6 }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 800 }}> Confirmar</Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default Pedidos;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b1b1b",
        flex: 1,
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        flex: 1,
    },

    divider: {
        color: 'white',
        borderWidth: 0.4,
        borderColor: 'white',
        width: '100%',
        marginVertical: 24,
    },

    produtoImg: {
        borderRadius: 10,
        width: 70,
        height: 70,
    },

    quantidadeButtons: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    quantidade: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

    addButton: {
        fontSize: 16,
        marginTop: 20,
        color: "white",
        borderColor: 'white',
        borderRadius: 10
    },

    totalContainer: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 6,
    },
});


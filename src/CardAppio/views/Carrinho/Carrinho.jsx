import { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Alert, } from "react-native";
import { Appbar, Button, Divider, IconButton } from 'react-native-paper';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Header from '../../components/Header/Header';
import { deleteCarrinhoItem, getCarrinho, updateCarrinhoItem } from '../../services/carrinho.services';
import { insertPedidos } from '../../services/pedido.services';
import { CustomerContext } from '../../context/CustomerContext';

const Carrinho = () => {
    const navigation = useNavigation();
    const { name, table } = useContext(CustomerContext);
    const [carrinho, setCarrinho] = useState([]);
    const isFocused = useIsFocused();

    const fetchData = () => {
        getCarrinho().then((data) => setCarrinho(data));
    };

    useEffect(() => {
        fetchData();
    }, [isFocused])

    const handleRemoveItem = (item) => {
        Alert.alert(
            "Remover produto",
            `Deseja remover o ${item.name} do carrinho?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Remover",
                    onPress: () =>
                        deleteCarrinhoItem(item).then(() => setTimeout(fetchData, 2000)),
                },
            ]
        );
    }

    const handleUpdateItem = (item, action) => {
        let newQuantity = item.quantity;

        if (action === 'decrease') {
            if (newQuantity === 1) {
                return;
            }
            newQuantity -= 1;
        }
        if (action === 'increase') {
            newQuantity += 1;
        }

        const newData = { ...item, quantity: newQuantity };

        updateCarrinhoItem(newData).then(() => {
            fetchData();
        });
    };

    const getTotal = () => {
        let sum = 0;

        for (let item of carrinho || []) {
            if (item && item.price && item.quantity) {
                sum += item.price * item.quantity;
            }
        }

        return sum;
    };

    const cartTotal = getTotal();

    const orderObject = {
        numeroPedido: Math.floor(Math.random() * 1000) + 1,
        produtos: carrinho,
        statusPedido: 'Em processamento',
        total: cartTotal,
        name: name,
        table: table,
    };

    const handleConfirmarPedido = () => {
        if (carrinho.length > 0) {
            insertPedidos(orderObject).then(() => navigation.navigate('Pedidos', { item: orderObject }))
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>

            <View style={styles.body}>
                {carrinho && carrinho.length > 0 ? (
                    <FlatList
                        data={carrinho}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity
                                        onPress={() => handleRemoveItem(item)}
                                    >
                                        <IconButton
                                            icon='trash-can'
                                            color='white'
                                        />
                                    </TouchableOpacity>
                                    <Image source={{ uri: item.imageurl }} style={styles.produtoImg} />
                                    <Text style={{
                                        lineHeight: 35,
                                        paddingLeft: 12,
                                        color: 'white',
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>{'\n'}
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>R$ {item.price}</Text>
                                    </Text>
                                    <View style={styles.quantidadeButtons}>
                                        <TouchableOpacity onPress={() => { }} >
                                            <IconButton
                                                icon='minus'
                                                color='white'
                                                size={16}
                                                onPress={() => handleUpdateItem(item, 'decrease')}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.quantidade}>{item.quantity}</Text>
                                        <TouchableOpacity onPress={() => { }} >
                                            <IconButton
                                                icon='plus'
                                                color='white'
                                                size={16}
                                                onPress={() => handleUpdateItem(item, 'increase')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                            </>
                        )}
                    />
                ) : (
                    <Text style={{ color: 'white', fontSize: 18, paddingVertical: 32, fontWeight: 'bold', }}> Carrinho de compras vazio </Text>
                )}

                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.push('Home')}>
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
                            marginBottom: 16,
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
                            R$ {cartTotal.toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={handleConfirmarPedido}>
                        <Button
                            mode='contained'
                            color={'#931603'}
                            style={{ borderRadius: 10, padding: 6 }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 800 }}> Confirmar Pedido </Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default Carrinho;

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
        borderWidth: 0.6,
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
        marginBottom: 20,
        color: "white",
        borderColor: 'white',
        borderRadius: 10
    },

    totalContainer: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 16,
    },
});


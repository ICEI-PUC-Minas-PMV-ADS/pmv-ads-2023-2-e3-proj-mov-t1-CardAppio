import { FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Appbar, Divider, Text } from "react-native-paper";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomerContext } from "../../context/CustomerContext";

const Pedido = ({ route }) => {
    const [numeroPedido, setNumeroPedido] = useState('');
    const [statusPedido, setStatusPedido] = useState('');
    const { name, table } = useContext(CustomerContext);
    const [total, setTotal] = useState('');
    const [produtos, setProdutos] = useState([]);
    const { item } = route.params ? route.params : {};
    const navigation = useNavigation();

    useEffect(() => {
        if (item) {
            setNumeroPedido(item.numeroPedido)
            setProdutos(item.produtos);
            setStatusPedido(item.statusPedido);
            setTotal(item.total);
        }
    }, [item]);


    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>

            <Body>
                <View>
                    <Text style={[styles.name, { backgroundColor: '#931603', marginBottom: 8 }]}> Pedido Nº: {numeroPedido} - {statusPedido}  </Text>
                    <Text style={styles.name}> Cliente: {name} - Mesa: {table} </Text>
                </View>
                <FlatList
                    data={produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.itemContainer}>
                                <Image source={{ uri: item.imageurl }} style={styles.image} />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.description}>{item.quantity}x R${item.price === 1 ? (item.price).toFixed(2) : (item.price * item.quantity).toFixed(2)}</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                        </ TouchableOpacity>
                    )}
                />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.total}> Total: </Text>
                    <Text style={[styles.total, { paddingLeft: 12 }]}> R${Number(total).toFixed(2)} </Text>
                </View>
            </Body>
        </SafeAreaView >
    )
}

export default Pedido;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b1b1b",
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    },
    divider: {
        color: 'white',
        borderWidth: 0.6,
        borderColor: 'white',
        width: '100%',
        marginVertical: 12,
    },
    itemDetails: {
        marginLeft: 24,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        color: "#909090",
        color: 'orange',
        fontSize: 14,
    },
    total: {
        fontSize: 24,
        color: 'white',
        paddingBottom: 32,
        fontWeight: 'bold',
    }
})
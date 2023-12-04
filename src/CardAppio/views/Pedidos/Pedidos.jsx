import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Appbar, Divider, Text } from "react-native-paper";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import { useContext, useEffect, useState } from "react";
import { getPedidos } from '../../services/pedido.services';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { CustomerContext } from "../../context/CustomerContext";

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const { name, table } = useContext(CustomerContext)

    const fetchData = () => {
        getPedidos().then((data) => setPedidos(data));
    };

    useEffect(() => {
        fetchData();
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>

            <Body>
                <FlatList
                    data={pedidos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(('Pedido'), { item })}>
                            <View style={styles.itemContainer}>
                                <View style={styles.itemDetails}>
                                    <Text style={styles.name}>Pedido Nº: {item.numeroPedido}</Text>
                                    <Text style={[styles.description, { color: 'green' }]}>Cliente: {name} - Mesa: {table} </Text>
                                    <Text style={styles.description}>{item.statusPedido}</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                        </ TouchableOpacity>
                    )}
                />
            </Body>
        </SafeAreaView>
    )
}

export default Pedidos;

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
})
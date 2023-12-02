import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

const Produtos = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params ? route.params : {};

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [estimativa, setEstimativa] = useState('');

    useEffect(() => {
        if (item) {
            setNome(item.nome);
            setDescricao(item.descricao);
            setPreco(item.preco);
            setImageURL(item.imageURL);
            setEstimativa(item.estimativa);
        }
    }, [item]);

    return (
        <SafeAreaView style={styles.container}>
            <Header>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>

            <View style={styles.body}>
                <Image
                    style={styles.image}
                    source={{ uri: item.imageURL }}
                />
                <View style={styles.produtoInfo}>
                    <Text style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>
                        {item.nome}
                    </Text>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                    }}>
                        {item.estimativa} min
                    </Text>
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={styles.valor}>{item.preco}</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={styles.description}>{item.descricao}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.addCartButtonContainer} onPress={() => navigation.navigate('Carrinho')}>
                <View style={{ alignItems: "center", marginTop: 32 }}>
                    <Button
                        mode="contained"
                        color={'#931603'}
                        style={styles.addCartButton}
                    >
                        <Text style={{ fontWeight: 800, fontSize: 16 }}> ADICIONAR AO CARRINHO </Text>
                    </Button>
                </View>
            </TouchableOpacity >

        </SafeAreaView >
    );
};

export default Produtos;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1b1b1b",
        flex: 1,
    },

    body: {
        margin: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        backgroundColor: "pink",
        height: 180,
        width: 360,
        borderRadius: 10,
    },

    produtoInfo: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%'
    },

    valor: {
        marginTop: 12,
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },

    description: {
        color: "white",
        marginVertical: 12,
        fontSize: 16,
    },

    addCartButtonContainer: {
        alignItems: "center",
        marginTop: 'auto',
        marginBottom: 64,
    },

    addCartButton: {
        borderRadius: 10,
        padding: 6,
    }
});
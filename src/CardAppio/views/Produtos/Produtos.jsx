import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { insertCarrinhoItem, updateCarrinhoItem, getCarrinhoItem } from "../../services/carrinho.services";

const Produtos = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params ? route.params : {};

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (item) {
            setId(item.id)
            setName(item.name);
            setDescription(item.description);
            setCategory(item.category);
            setPrice(item.price);
            setImageURL(item.imageurl);
            setDeliveryTime(item.deliverytime);
            setQuantity(item.quantity);
        }
    }, [item]);


    const productObject = {
        id: id,
        name: name,
        category: category,
        description: description,
        price: price,
        imageurl: imageURL,
        deliverytime: deliveryTime,
        quantity: quantity,
    };

    const handleAddToCart = async () => {
        // Verificar se o item já está no carrinho
        const existingItem = await getCarrinhoItem(productObject.id);

        if (existingItem) {
            // Item já existe no carrinho, aumentar a quantidade
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };

            updateCarrinhoItem(updatedItem).then(() => {
                navigation.navigate('Carrinho');
            });
        } else {
            // Item não existe no carrinho, adicionar novo item
            insertCarrinhoItem(productObject).then(() => {
                navigation.navigate('Carrinho');
            });
        }
    };

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
                    source={{ uri: item.imageurl }}
                />
                <View style={styles.produtoInfo}>
                    <Text style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                    }}>
                        {item.deliverytime} min
                    </Text>
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={styles.valor}>{item.price}</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.addCartButtonContainer}
            >
                <View style={{ alignItems: "center", marginTop: 32 }}>
                    <Button
                        mode="contained"
                        color={'#931603'}
                        style={styles.addCartButton}
                        onPress={handleAddToCart}
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
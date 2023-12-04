import { View, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import { Appbar, Divider, Text } from 'react-native-paper';
import COLORS from '../../constants/colors';
import { useEffect, useState } from 'react';
import { getFavorites } from '../../services/favorites.services';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Favoritos = () => {
    const [favorites, setFavorites] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        getFavorites().then((data) => setFavorites(data));
    };

    useEffect(() => {
        fetchData();
    }, [isFocused])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="Favoritos" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>
            <Body>
                {favorites && favorites.length > 0 ? (
                    <FlatList
                        data={favorites}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate(('Produtos'), { item })}>
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.imageurl }} style={styles.image} />
                                    <View style={styles.itemDetails}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                        <Text style={styles.price}>R$ {item.price}</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                            </ TouchableOpacity>
                        )}
                    />
                ) : (
                    <Text style={{ color: 'white', fontSize: 18, paddingVertical: 32, fontWeight: 'bold', textAlign: 'center' }}> Você ainda não possui favoritos </Text>
                )}

            </Body>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    Container: {
        flex: 1,
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
        marginLeft: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        color: "#909090",
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        marginTop: 6,
        color: 'green',
        fontWeight: 'bold',
    },
});


export default Favoritos;
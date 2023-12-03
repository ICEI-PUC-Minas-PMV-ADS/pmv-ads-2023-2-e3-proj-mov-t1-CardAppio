import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Grid({ data }) {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.gridContainer}
            numColumns={2}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.gridItem}
                    onPress={() => navigation.navigate(('Produtos'), { item })}
                >
                    <Image
                        style={styles.gridImage}
                        source={{ uri: item.imageurl }}
                    />
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        width: '45%',
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
    },
    gridImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

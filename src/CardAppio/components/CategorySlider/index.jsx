import { FlatList, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const categorias = [
    {
        id: 1,
        title: 'Hamburgueres',
    },
    {
        id: 2,
        title: 'Pizzas',
    },
    {
        id: 3,
        title: 'Bebidas',
    }
]

const CategorySlider = () => {

    return (
        <FlatList
            data={categorias}
            key={(item) => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Button key={item.id} style={styles.categoryButton}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                </Button>
            )}
        />
    )
}

const styles = StyleSheet.create({
    categoryButton: {
        backgroundColor: 'background: rgba(217, 217, 217, 0.15)',
        marginHorizontal: 4,
    },
})

export default CategorySlider;
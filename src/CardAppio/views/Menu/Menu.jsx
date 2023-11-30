import { View, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import { Appbar, Text } from 'react-native-paper';
import COLORS from '../../constants/colors';

const menuItems = [
  {
    id: '1',
    name: 'Item 1',
    description: 'Uma breve descrição do Item 1',
    price: 'R$ 10.99',
    imageURL: 'https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg'
  },
];

const MenuList = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Header>
        <Appbar.Action icon="menu" onPress={() => { }} />
        <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
        <Appbar.Action icon="account" onPress={() => { }} />
      </Header>

      <Body>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imageURL }} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  Container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
  },
});

export default MenuList;

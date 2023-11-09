import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

import Header from '../../components/Header/Header'
import Container from '../../components/Container/Containers'
import Body from '../../components/Body/Body'

const menuItems = [
  {
    id: '1',
    name: 'Item 1',
    description: 'Uma breve descrição do Item 1',
    price: 'R$ 10.99',
   // image:
  },
];

const MenuList = () => {
  return (
    <Container>
    
      <Header />
      <Body>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </Body>

    </Container>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
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
  },
  description: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
  },
});

export default MenuList;

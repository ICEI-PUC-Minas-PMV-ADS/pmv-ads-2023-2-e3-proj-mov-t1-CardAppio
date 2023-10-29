import { Appbar, Text, Button } from 'react-native-paper';

import Header from '../../components/Header'
import { ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/colors';

const categorias = [
  {
    id: 1,
    title: 'Hamburguer',
  },
  {
    id: 2,
    title: 'Pizza',
  },
  {
    id: 3,
    title: 'Bebidas',
  }
]

const Home = () => {

  return (
    <>
        <Header>
            <Appbar.Action icon="menu" onPress={() => {}}/>
            <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold'}} title="CardAppio" onPress={() => {}}/>
            <Appbar.Action icon="account" onPress={() => {}}/>
        </Header>
        <View style={styles.body}>

          <View style={styles.categoryContainer}>

            <Text style={styles.categoryTitle}> 
              Categorias:
            </Text>

            <ScrollView style={styles.scrollViewCategory} horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
              {categorias.map(categoria => 
                  <Button key={categoria.id} style={styles.categoryButton}>
                    <Text style={{ fontWeight: 'bold', color: 'white'}}>{categoria.title}</Text>
                  </Button>
                )}
            </ScrollView>

          </View>

          

        </View>
    </>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: COLORS.black,
  },
  categoryContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  categoryButton:{
    backgroundColor: 'background: rgba(217, 217, 217, 0.15)',
    marginHorizontal: 4,
  }
})

export default Home;
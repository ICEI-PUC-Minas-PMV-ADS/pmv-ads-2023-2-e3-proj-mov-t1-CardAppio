import { Appbar, Text } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, } from 'react-native';

import Header from '../../components/Header/Header'
import COLORS from '../../constants/colors';
import Slider from '../../components/VoucherSlider';
import CategorySlider from '../../components/CategorySlider';
import voucherBannerList from '../../assets/VoucherBanner/voucherBannerList';

import { useNavigation } from '@react-navigation/native';

const popularImages = [
  {
    id: 1,
    image: 'https://i.imgur.com/t7Y4lRJ.jpg',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/1VBg6vw.jpg',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/t7Y4lRJ.jpg',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/1VBg6vw.jpg',
  },
]

const HomePage = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: COLORS.black }}>
      <Header>
        <Appbar.Action icon="menu" onPress={() => { }} />
        <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
        <Appbar.Action icon="account" onPress={() => { }} />
      </Header>
      <View style={styles.body}>

        <View style={styles.container}>
          <Text style={styles.title}>
            Categorias:
          </Text>
          <CategorySlider />
        </View>

        <View style={styles.voucherContainer}>
          <Slider data={voucherBannerList} paging={true} />
        </View>

        <Text style={[styles.title, { marginLeft: 16 }]}> Recomendações </Text>
        <View style={styles.container}>
          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => navigation.navigate('Produtos')}
            >
              <Image
                style={styles.gridImage}
                source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => navigation.navigate('Produtos')}
            >
              <Image
                style={styles.gridImage}
                source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => navigation.navigate('Produtos')}
            >
              <Image
                style={styles.gridImage}
                source={{ uri: 'https://i.imgur.com/1VBg6vw.jpg' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => navigation.navigate('Produtos')}
            >
              <Image
                style={styles.gridImage}
                source={{ uri: 'https://i.imgur.com/1VBg6vw.jpg' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.title, { marginLeft: 16 }]}> Populares </Text>
        <View style={styles.container}>
          <Slider data={popularImages} paging={false} />
        </View>

      </View>
    </ ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  gridItem: {
    width: '45%',
    height: 200,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  }
})

export default HomePage;
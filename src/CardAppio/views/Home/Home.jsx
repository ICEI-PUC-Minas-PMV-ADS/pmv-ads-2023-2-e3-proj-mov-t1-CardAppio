import { Appbar, Text, Button } from 'react-native-paper';
import { FlatList, Image, ScrollView, StyleSheet, View, } from 'react-native';

import Header from '../../components/Header/Header'
import COLORS from '../../constants/colors';
import Slider from '../../components/VoucherSlider';
import CategorySlider from '../../components/CategorySlider';
import voucherBannerList from '../../assets/VoucherBanner/voucherBannerList';

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

const Home = () => {

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
            <Image
              style={styles.gridItem}
              source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }}
            />
            <Image
              style={styles.gridItem}
              source={{ uri: 'https://i.imgur.com/t7Y4lRJ.jpg' }}
            />
            <Image
              style={styles.gridItem}
              source={{ uri: 'https://i.imgur.com/1VBg6vw.jpg' }}
            />
            <Image
              style={styles.gridItem}
              source={{ uri: 'https://i.imgur.com/1VBg6vw.jpg' }}
            />
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
    gap: 10,
  },
  gridItem: {
    width: '45%',
    height: 200,
  }
})

export default Home;
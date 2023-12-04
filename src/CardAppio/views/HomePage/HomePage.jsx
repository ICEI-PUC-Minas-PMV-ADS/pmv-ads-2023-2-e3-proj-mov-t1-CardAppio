import { Appbar, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'

import Header from '../../components/Header/Header'
import COLORS from '../../constants/colors';
import Slider from '../../components/Slider';
import CategorySlider from '../../components/CategorySlider';
import voucherBannerList from '../../assets/VoucherBanner/voucherBannerList';

import { useEffect, useState } from 'react';
import { getItens } from '../../services/itens.services';
import Grid from '../../components/Grid';
import { useIsFocused } from '@react-navigation/native';

const HomePage = () => {
  const [itens, setItens] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    getItens().then(dados => {
      setItens(dados);
    })
  }, [isFocused])

  return (
    <ScrollView style={styles.body}>
      <Header>
        <Appbar.Action icon="menu" onPress={() => { }} />
        <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="CardAppio" onPress={() => { }} />
        <Appbar.Action icon="account" onPress={() => { }} />
      </Header>
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
        <Grid data={itens} />
      </View>
      <Text style={[styles.title, { marginLeft: 16 }]}> Populares </Text>
      <View style={styles.container}>
        <Slider data={itens} paging={false} />
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
  }
})

export default HomePage;
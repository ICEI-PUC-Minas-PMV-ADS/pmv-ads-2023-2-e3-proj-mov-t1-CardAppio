import { Appbar, Text, Button } from 'react-native-paper';
import { FlatList, Image, ScrollView, StyleSheet, View, } from 'react-native';

import Header from '../../components/Header/Header'
import COLORS from '../../constants/colors';


const Favoritos = () => {

    return (
        <ScrollView style={{ backgroundColor: COLORS.black }}>
            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="Favoritos" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>
            <View style={styles.body}>

            </View>

        </ ScrollView>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

  
})


export default Favoritos;
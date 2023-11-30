import { Appbar } from 'react-native-paper';
import { SafeAreaView, ScrollView, StyleSheet, View, } from 'react-native';

import Header from '../../components/Header/Header'
import COLORS from '../../constants/colors';


const Favoritos = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header>
                <Appbar.Action icon="menu" onPress={() => { }} />
                <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold' }} title="Favoritos" onPress={() => { }} />
                <Appbar.Action icon="account" onPress={() => { }} />
            </Header>
            <View style={styles.body}>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },


})


export default Favoritos;
import { Appbar } from 'react-native-paper';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {

  return (
    <>
        <Header>
            <Appbar.Action icon="menu" onPress={() => {}}/>
            <Appbar.Content titleStyle={{ fontSize: 24, fontWeight: 'bold'}} title="CardAppio" onPress={() => {}}/>
            <Appbar.Action icon="account" onPress={() => {}}/>
        </Header>
        <Footer />
    </>
  );
};

export default Home;
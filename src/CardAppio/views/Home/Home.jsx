import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import COLORS from '../../constants/colors'
import Menu from '../Menu/Menu';
import HomePage from '../HomePage/HomePage';
import Cart from '../Carrinho/Carrinho';
import Favoritos from '../Favoritos/Favoritos';
import Pedidos from '../Pedidos/Pedidos';

const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'homepage', title: 'Home', icon: 'home' },
    { key: 'menu', title: 'Menu', icon: 'silverware-fork-knife' },
    { key: 'cart', title: 'Carrinho', icon: 'cart' },
    { key: 'pedidos', title: 'Pedidos', icon: 'clipboard-text' },
    { key: 'favoritos', title: 'Favoritos', icon: 'heart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    homepage: HomePage,
    menu: Menu,
    cart: Cart,
    pedidos: Pedidos,
    favoritos: Favoritos,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: COLORS.black }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default Home;
import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import COLORS from '../../constants/colors'
import Menu from '../../views/Menu/Menu';
import Home from '../../views/Home/Home';
import Cart from '../../views/Carrinho/Carrinho';
import Favoritos from '../../views/Favoritos/Favoritos';

const BottomMenu = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'menu', title: 'Menu', icon: 'silverware-fork-knife' },
    { key: 'cart', title: 'Carrinho', icon: 'cart' },
    { key: 'favoritos', title: 'Favoritos', icon: 'heart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    menu: Menu,
    cart: Cart,
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

export default BottomMenu;
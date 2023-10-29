import {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import COLORS from '../constants/colors'

const HomeRoute = () => <Text>Home</Text>;

const MenuRoute = () => <Text>Menu</Text>;

const CartRoute = () => <Text>Carrinho</Text>;

const FavRoute = () => <Text>Favoritos</Text>;

const Footer = () => {
    const [index, setIndex] = useState(0);
  
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'menu', title: 'Menu', icon: 'silverware-fork-knife' },
        { key: 'cart', title: 'Carrinho', icon: 'cart' },
        { key: 'favoritos', title: 'Favoritos', icon: 'heart' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        menu: MenuRoute,
        cart: CartRoute,
        favoritos: FavRoute,
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

export default Footer;
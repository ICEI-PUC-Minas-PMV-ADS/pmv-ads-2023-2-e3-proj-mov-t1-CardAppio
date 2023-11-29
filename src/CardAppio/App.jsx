import { NavigationContainer } from '@react-navigation/native';

import Auth from './navigations/Auth'

import Menu from './views/BottomMenu/BottomMenu'
import Inicial from './views/Inicial/Inicial';

export default function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}


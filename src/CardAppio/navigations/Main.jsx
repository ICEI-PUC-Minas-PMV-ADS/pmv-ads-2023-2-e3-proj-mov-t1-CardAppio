import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home/Home';
import Produtos from '../views/Produtos/Produtos';
import Carrinho from '../views/Carrinho/Carrinho';

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Produtos'
                component={Produtos}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    );
}

export default Main;
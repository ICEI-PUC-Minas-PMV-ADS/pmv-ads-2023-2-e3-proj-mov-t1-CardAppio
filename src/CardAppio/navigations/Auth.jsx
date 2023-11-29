import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/Login/Login'
import Cadastro from '../views/Cadastro/Cadastro'
import telaIncial from '../views/Inicial/Inicial'

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen
                name='Inicial'
                component={telaIncial}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    );
}

export default Main;
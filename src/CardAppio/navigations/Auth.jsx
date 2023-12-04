import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/Login/Login'
import Cadastro from '../views/Cadastro/Cadastro'
import telaIncial from '../views/Inicial/Inicial'
import Customer from '../views/Cadastro/Customer';

const { Navigator, Screen } = createNativeStackNavigator();

const Auth = () => {

    return (
        <Navigator initialRouteName='Inicial'>
            <Screen
                name='Inicial'
                component={telaIncial}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Customer'
                component={Customer}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Login'
                component={Login}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    header: () => null,
                }}
            />
        </Navigator>
    );
}

export default Auth;
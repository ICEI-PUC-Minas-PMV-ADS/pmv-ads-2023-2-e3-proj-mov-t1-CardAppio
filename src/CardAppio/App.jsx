import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './context/UserContext';
import Route from './navigations/Route';
import { CustomerProvider } from './context/CustomerContext';

export default function App() {
  return (
    <UserProvider>
      <CustomerProvider>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </CustomerProvider>
    </UserProvider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './context/UserContext';
import Route from './navigations/Route';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}

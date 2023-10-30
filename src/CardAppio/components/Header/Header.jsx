import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";


const Header = ({ goBack, children}) => {
    return (
      <Appbar.Header style={styles.header}>
        {
          goBack && 
          <Appbar.BackAction onPress={goBack} />
        }
        {children}
      </Appbar.Header>
    );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1B1B1B'
  }
})
  
export default Header;
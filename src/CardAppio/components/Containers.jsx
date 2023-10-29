import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Container = ({children}) => {

    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Container;
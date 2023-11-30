import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function SocialButtons() {
    return (
        <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Button
                    mode='contained'
                    color='white'
                    style={styles.socialButton}
                > <Image
                        source={require('../../assets/googleLogo.png')}
                    />
                </Button>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            >
                <Button
                    mode='contained'
                    color='white'
                    style={styles.socialButton}
                > <Image
                        source={require('../../assets/facebookLogo.png')}
                    />
                </Button>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialButton: {
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
})
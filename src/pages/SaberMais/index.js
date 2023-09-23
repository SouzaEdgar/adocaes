import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';

export default function SaberMais() {
    return (
        <View style={styles.container}>
            <Text>Oi</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})

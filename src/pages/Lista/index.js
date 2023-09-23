import 'react-native-gesture-handler';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

export default function Lista({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
                //renderItem={({item}) => {
                renderItem={() => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.caixaNome}>
                                <Text>
                                    S/N
                                </Text>
                                <Image style={{
                                    width: 170, 
                                    height: 170, 
                                    borderRadius: 20,
                                }}
                                    source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1154969095972868138/6fb70c41-2626-4324-a6e5-d4b300b9a88f.png'}}/>
                            </View>
                            <View style={styles.caixaInfo}>
                                <View style={styles.infos}>
                                    <Text>Idade: 4</Text>
                                    <Text>Sexo: Macho</Text>
                                    <Text>Local: Tua casa</Text>
                                </View>
                                <TouchableHighlight 
                                    style={styles.botao}
                                    onPress={() => navigation.navigate('SaberMais')}
                                >
                                    <Text>AOBA</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 70,
        borderColor: '#000000',
       // borderBottomColor: '#000000'
    },
    caixaNome: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    caixaInfo: {
        justifyContent: 'flex-end',
        paddingRight: 25,
    },
    infos: {
        marginBottom: 20,
        margin: 10,
    },
    botao: {
        width: 60,
        height: 60,
        position: 'relative',
        borderRadius: 50,
    }
})

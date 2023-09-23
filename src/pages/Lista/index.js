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
                                <Text style={styles.nome}>
                                    Juninho Ruindade Pura
                                </Text>
                                <View style={{
                                    width: 180,
                                    height: 180,
                                    backgroundColor: '#ff5500',
                                    borderRadius: 20,
                                }}>
                                    <Image style={{
                                        width: 170, 
                                        height: 170, 
                                        borderRadius: 20,
                                        margin: 5,
                                        position: 'relative'
                                    }}
                                        source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1154969095972868138/6fb70c41-2626-4324-a6e5-d4b300b9a88f.png'}}
                                    />
                                </View>

                            </View>
                            <View style={styles.caixaInfo}>
                                <View style={styles.infos}>
                                    <Text>Idade: 999</Text>
                                    <Text>Sexo: Macho</Text>
                                    <Text>Local: llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch e</Text>
                                </View>
                                <TouchableHighlight 
                                    style={styles.botao}
                                    onPress={() => navigation.navigate('SaberMais')}
                                >
                                    <Text>SABER MAIS</Text>
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
        //marginTop: 10,
        marginBottom: 15,
        borderColor: '#000000',
       // borderBottomColor: '#000000'
    },
    caixaNome: {
        width: '50%',
        alignItems: 'center',
        paddingHorizontal: 20,
        //backgroundColor: 'orange'
    },
    caixaInfo: {
        flex: 1,
        width: '45%',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        //backgroundColor: 'yellow'
    },
    infos: {
        //backgroundColor: 'blue'
    },
    nome: {
        padding: 10,
        justifyContent: 'center',
    },
    botao: {
        width: '65%',
        height: 50,
        marginVertical: '5%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'grey',
    }
})

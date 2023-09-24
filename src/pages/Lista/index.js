import 'react-native-gesture-handler';
import { useCallback } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function Lista({navigation}) {
    const [fontsLoaded] = useFonts({
        //'Quicksand': require('./assets/fonts/Quicksand-Regular.ttf'),
        Roboto_100Thin, Roboto_700Bold
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
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
                                <View style={styles.grade}>
                                    <View style={styles.infos}>
                                        <Text style={styles.infosTitulo}>idade: </Text>
                                        <Text style={styles.infosTitulo}>Sexo: </Text>
                                        <Text style={styles.infosTitulo}>Local: </Text>
                                    </View>
                                    <View style={{
                                        //backgroundColor: 'orange',
                                    }}>
                                        <Text style={styles.infosValor}>18</Text>
                                        <Text style={styles.infosValor}>Macho </Text>
                                        <Text style={styles.infosValor}>Baeta - Sao Bernado </Text>
                                    </View>
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
    grade: {
        flexDirection: 'row'
    },
    infos: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        //backgroundColor: 'red'
    },
    infosTitulo: {
        paddingVertical: 8,
        justifyContent: 'center',
        color: 'blue',
        fontFamily: 'Roboto_700Bold'
    },
    infosValor: {
        paddingVertical: 8,
        justifyContent: 'center',
        color: 'black',
        fontFamily: 'Roboto_700Bold'
    },
    nome: {
        padding: 10,
        justifyContent: 'center',
        color: 'blue',
        fontFamily: 'Roboto_100Thin'
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

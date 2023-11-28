import 'react-native-gesture-handler';
import { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image, Pressable } from 'react-native';
import { StyleSheet } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ref, onValue } from "firebase/database"
import { db } from '../../config/firebaseconfig'


import { 
    Roboto_100Thin, 
    Roboto_700Bold, 
    Roboto_900Black,
    Roboto_500Medium,
} from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function Lista({navigation}) {
    const [fontsLoaded] = useFonts({
        //'Quicksand': require('./assets/fonts/Quicksand-Regular.ttf'),
        Roboto_100Thin, 
        Roboto_700Bold,
        Roboto_900Black,
        Roboto_500Medium,
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
                                <View>
                                    <Pressable onPress={() => readDAta()}>
                                        <Image style={[styles.imagem,{
                                            width: 200, 
                                            height: 170, 
                                            borderRadius: 20,
                                            position: 'relative'
                                        }]}
                                            source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1154969095972868138/6fb70c41-2626-4324-a6e5-d4b300b9a88f.png'}}
                                        />
                                    </Pressable>
                                    
                                </View>
                            </View>
                            <View style={styles.caixaInfo}>
                                <View style={styles.grade}>
                                    <View style={styles.infos}>
                                        <Text style={styles.infosTitulo}>idade: </Text>
                                        <Text style={styles.infosTitulo}>Sexo: </Text>
                                        <Text style={styles.infosTitulo}>Local: </Text>
                                    </View>
                                    <View style={styles.caixaValor}>
                                        <Text style={styles.infosValor}>18</Text>
                                        <Text style={styles.infosValor}>Macho </Text>
                                        <Text style={styles.infosValor}>Eita ferro nome grande - Sao Bernado do Campo</Text>
                                    </View>
                                </View>
                                <TouchableHighlight 
                                    style={styles.botao}
                                    onPress={() => navigation.navigate('SaberMais')}
                                >
                                    <Text style={styles.txtBotao}>SABER MAIS</Text>
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
        //width: '45%',
        width: '47%',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        //backgroundColor: 'yellow',
    },
    caixaValor: {
        width: '70%',
        justifyContent: 'center',
    },
    grade: {
        flexDirection: 'row',
    },
    infos: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 5,
        //backgroundColor: 'red'
    },
    infosTitulo: {
        fontSize: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        color: 'blue',
        fontFamily: 'Roboto_500Medium',
    },
    infosValor: {
        fontSize: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        color: 'black',
        fontFamily: 'Roboto_500Medium',
        //backgroundColor: 'purple',
    },
    nome: {
        width: '100%',
        fontSize: 15,
        padding: 5,
        justifyContent: 'center',
        color: 'blue',
        fontFamily: 'Roboto_900Black',
        //backgroundColor: 'green'
    },
    imagem: {
        borderColor: 'orange',
        borderWidth: 3,
    },
    botao: {
        width: '65%',
        height: 30,
        marginTop: '5%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        backgroundColor: 'orange',

    },
    txtBotao: {
        color: 'blue',
        fontFamily: 'Roboto_500Medium',
        textShadowColor: 'white',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 1,
    }
})

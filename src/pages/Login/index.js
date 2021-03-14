import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Detail(){
    const navigation = useNavigation();

    function navigateActions() {
        navigation.navigate('Actions')
    }


    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image}/>
            </View >  

            <View style={styles.actions}>
                    <TouchableOpacity style = { styles.action}>
                        <Text style = {styles.actionText} onPress={navigateActions}>
                            Connect
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api.js';
import { useState } from 'react';

const accessToken = 'fe92d05519def5aaac5c10ab91a3ebd8a2b02df86a2d53cf28d252d8a10760a8';


export default function Login(){

    const [session, setSession] = useState(false);

    const navigation = useNavigation();

    function navigateActions() {
        navigation.navigate('Actions')
    }

    function connect(){
        api.post(`Login/Autenticar?token=${accessToken}`).then(response =>{
            console.log(response.data);
            setSession(response.data);
            if(session){
                navigateActions()
                console.log('Connected Successfully');
            };
        });

    }
    

    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image}/>
            </View >  

            <View style={styles.actions}>
                    <TouchableOpacity style = { styles.action}>
                        <Text style = {styles.actionText} onPress={connect}>
                            Connect
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
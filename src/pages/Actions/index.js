import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import MapView from 'react-native-maps';   


export default function Actions(){
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }


    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name = "arrow-left" size = {28} color = "blue"/>
                </TouchableOpacity>
            </View>  

            <View style = {styles.viewBox}>
               
                    <TouchableOpacity style = {styles.action} >
                        <Text style = {styles.actionText}>
                            Paradas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.action} >
                        <Text style = {styles.actionText}>
                            Linhas
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                style={styles.map} 
                initialRegion={{
                    latitude: -23.5489,
                    longitude: -46.6388,
                    latitudeDelta: 0.1000,
                    longitudeDelta: 0.0800,
                  }}
                />
            </View>
        </View>
    );
}
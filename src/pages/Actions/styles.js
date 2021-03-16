import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    viewBox: {
        padding:24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    actions: {
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight:'bold',
    },

    image: {
        width: 280,
        height:100,
        //backgroundColor: "blue"
      },

    mapContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    map: {
        paddingHorizontal: 190,
        height: 450
      },
});
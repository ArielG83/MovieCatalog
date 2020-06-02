import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { colors } from '../../utils/constants';

export default GenericBtn = ({color, label, onClick, Icon, disabled = false, iconColor = colors.white}) => {
    return (
        <TouchableOpacity 
            disabled={disabled}
            style={{...styles.container, ...{ backgroundColor: color, opacity: disabled ? 0.4 : 1 }}}
            underlayColor={color}
            onPress={onClick}>
            { Icon && <FontAwesomeIcon icon={Icon} style={{color: iconColor}} size={26}/> }
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems:"center",
        alignSelf: 'center',
        backgroundColor: colors.white,
        paddingVertical:20,
        paddingHorizontal:10,
        borderRadius: 20,
    },
    text:{
        color: colors.white,
        fontSize:14,
        marginLeft:10,
    },
})
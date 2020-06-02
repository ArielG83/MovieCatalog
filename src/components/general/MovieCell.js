import React from 'react';
import { 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../utils/constants'

const MoviesCell = ({movie, onclick}) => {
    const { original_title, poster_path} = movie

    return (
        <TouchableOpacity onPress={onclick} style={styles.container}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}` }} style={styles.posterImage}/>
            <Text style={styles.title}>{original_title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: "center",
        backgroundColor: colors.white,
        padding:15,
    },
    posterImage: {
        width: 150,
        height:225,
        borderRadius: 15,
    },
    title:{
        fontSize: 27,
        color: colors.grey,
        textAlign: 'center',
    }
})

export default MoviesCell
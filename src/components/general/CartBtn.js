import React, { useState, useEffect } from 'react'
import { Text, StyleSheet,View } from 'react-native'
import { colors } from '../../utils/constants'
import WithMovies from '../../HOC/WithMovies'
import GenericBtn from './GenericBtn'
import FavoritesPage from '../Favorites/FavoritesPage'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-native-modal';

const CartBtn = ({favoriteMovies, openMoviePage}) => {
    const [favoriteCount, setFavoriteCount] = useState(0)
    const [isFavoritesModalVisible, setIsFavoritesModalVisible] = useState(false)

    useEffect(() => {
        setFavoriteCount(Object.keys(favoriteMovies).length)
    }, [favoriteMovies]);

    return (
        <View style={styles.container}>
            <GenericBtn 
                disabled={!favoriteCount}
                color={'transparent'} 
                label={''} 
                onClick={() => setIsFavoritesModalVisible(true)}
                Icon={faHeart}/>
            { favoriteCount > 0 && <View style={styles.counter}>
                <Text style={styles.text}>{ favoriteCount }</Text>
            </View>}
            <View>
                <Modal isVisible={isFavoritesModalVisible}>
                    <FavoritesPage closeFavorites={() => setIsFavoritesModalVisible(false)} openMoviePage={openMoviePage}/>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems:"center",
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    counter:{
        position: 'absolute',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.googleRed,
        width:26,
        bottom:5,
    },
    text:{
        color: colors.white,
        fontSize:16,
        textAlign: "center",
    },
})

export default WithMovies(CartBtn)
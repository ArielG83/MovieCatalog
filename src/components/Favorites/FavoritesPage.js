import React, { useState, useEffect } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import MovieCell from '../general/MovieCell'
import GenericBtn from '../general/GenericBtn'
import { colors } from '../../utils/constants'
import WithMovies from '../../HOC/WithMovies'
import { isEmpty } from '../../utils/general'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const FavoritesPage = ({ actions, favoriteMovies, closeFavorites, openMoviePage }) => {
    const [favoriteMoviesArray, setFavoriteMoviesArray] = useState([])
    
    useEffect(() => {
        if(isEmpty(favoriteMovies)){
            actions.getFavorites()
        }
      }, []);

    useEffect(() => {
        setFavoriteMoviesArray(Object.values(favoriteMovies))
    }, [favoriteMovies]);

    const closeAndOpen = (movie) => {
        closeFavorites()
        openMoviePage(movie)
    }


    const renderSeparator = () => {
        return <View style={{ height: 2, width: "100%", backgroundColor: colors.lightGrey }} />
      };

    const renderCell = ({item}) => {
        return <MovieCell movie={item} onclick={() => closeAndOpen(item) }/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.closeBtn}>
                <GenericBtn 
                    iconColor={colors.grey}
                    color={'transparent'} 
                    label={''} 
                    onClick={closeFavorites}
                    Icon={faTimesCircle}/>
            </View>
            <View style={styles.main}>
                { favoriteMoviesArray && favoriteMoviesArray.length > 0 ? 
                <FlatList
                    data={favoriteMoviesArray}
                    ItemSeparatorComponent={renderSeparator}
                    renderItem={renderCell}
                    keyExtractor={item => item.id.toString()}
                /> 
                : <ActivityIndicator size="large" color={colors.grey} /> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
    },
    closeBtn:{
        position: "absolute",
        right:0,
    },
    main:{
        flex:6,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default WithMovies(FavoritesPage)
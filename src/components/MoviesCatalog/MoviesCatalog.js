import React, { useEffect, useLayoutEffect } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import MovieCell from '../general/MovieCell'
import { colors } from '../../utils/constants'
import WithMovies from '../../HOC/WithMovies'
import { isEmpty } from '../../utils/general'
import CartBtn from '../general/CartBtn'

const MoviesCatalog = ({ actions, navigation, popularMovies, favoriteMovies }) => {
    useEffect(() => {
        if(popularMovies.length <= 0){
            loadMovies()
        }

        if(isEmpty(favoriteMovies)){
            actions.getFavorites()
        }
      }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <CartBtn openMoviePage={(item)=>navigation.navigate('MoviePage', item)}/>
        });
    }, [navigation]);

    const loadMovies = () => {
        const page = popularMovies.length < 0 ? 1 : Math.ceil(popularMovies.length/20) + 1
        actions.getPopular(page);
    }

    const renderSeparator = () => {
        return <View style={{ height: 2, width: "100%", backgroundColor: colors.lightGrey }} />
      };

    const renderCell = ({ item }) => {
        return <MovieCell movie={item} onclick={() => navigation.navigate('MoviePage', item) }/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                { popularMovies && popularMovies.length > 0 ? 
                <FlatList
                    data={popularMovies}
                    ItemSeparatorComponent={renderSeparator}
                    renderItem={renderCell}
                    onEndReached={loadMovies}
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
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    main:{
        flex:6,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default WithMovies(MoviesCatalog)
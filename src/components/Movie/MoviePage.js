import React, { useLayoutEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../utils/constants'
import WithMovies from '../../HOC/WithMovies'
import GenericBtn from '../general/GenericBtn'
import CartBtn from '../general/CartBtn'
import { isEmpty } from '../../utils/general'

const screenWidth = Math.round(Dimensions.get('window').width);

const MoviePage = ({ route, actions, favoriteMovies, navigation }) => {
    const { original_title, poster_path, overview, popularity, id} = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <CartBtn openMoviePage={(item)=>navigation.navigate('MoviePage', item)}/>
        });
    }, [navigation]);

    const Label = ({label, content}) =>  <View style={styles.labelWrap}>
                                            <Text style={styles.label}>{`${label}: ${content}`}</Text>
                                        </View>
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}` }} style={styles.posterImage}/>
                <View style={styles.inner}>
                    <Label label={'Title'} content={original_title} />
                    <Label label={'Popularity Points'} content={Math.round(popularity)} />
                    <Label label={'Summery'} content={overview} />
                </View>
            </View>
            <View style={styles.footer}>
                {isEmpty(favoriteMovies) || !favoriteMovies[id] ?
                <GenericBtn 
                    color={colors.googleRed} 
                    label={'Add to favorites'} 
                    onClick={()=>actions.addToFavorites(route.params)} 
                    Icon={faHeart}/>
                : <GenericBtn 
                    color={colors.grey} 
                    label={'Remove from favorites'} 
                    onClick={()=>actions.removeFromFavorites(id)} 
                    Icon={faHeart}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    main:{
        flex:6,
        flexGrow: 6
    },
    posterImage: {
        width: screenWidth/3,
        height: screenWidth/3 * 1.5,
        borderRadius: 15,
        padding: 15,
        margin:15,
        justifyContent:'center',
        alignSelf: 'center',
    },
    inner:{
        flexDirection: "column",
        justifyContent: 'flex-start',
        flex:2,
        padding: 15,
    },
    labelWrap:{
        paddingBottom:5,
        flexDirection: 'row',
    },
    label:{
        flexShrink:1,
        fontSize: 16,
    },
    footer:{
        flex:1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }

})

export default WithMovies(MoviePage)
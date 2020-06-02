import React, { useEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import WithUser from '../../HOC/WithUser';
import GenericBtn from '../general/GenericBtn';
import { GoogleSignin } from '@react-native-community/google-signin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faFilm } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../utils/constants'

const screenWidth = Math.round(Dimensions.get('window').width);

const LoginPage = ({ actions, navigation, name, id, profileImage }) => {
    useEffect(() => {
        GoogleSignin.configure();
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.loginTitle}>
                    {`Welcome ${ name && name != '' ? name : 'Stranger'}!`}
                </Text>
                { profileImage && profileImage != '' ? 
                    <Image 
                        source={{ uri: profileImage }} 
                        style={{...styles.profileImage}} />
                : <FontAwesomeIcon 
                    icon={faUserCircle} 
                    size={ screenWidth/3 } 
                    style={styles.userIcon}/> }
                { name && name != '' ?
                 <GenericBtn
                    disabled={!name} 
                    color={colors.grey} 
                    label={'Movie List'} 
                    onClick={() => navigation.navigate('MoviesCatalog')} 
                    Icon={faFilm} />
                : <Text style={styles.loginLabel}>
                    Please log in to continue to the awesomness
                </Text> }
            </View>
            <View style={styles.footer}>
                <GenericBtn 
                    disabled={id && id != ''}
                    color={colors.fbBlue} 
                    label={'Login with Facebook'} 
                    onClick={actions.FBLogin} 
                    Icon={fab.faFacebookF }/>
                <GenericBtn 
                    disabled={id && id != ''}
                    color={colors.googleRed} 
                    label={'Or with Google'} 
                    onClick={actions.GoogleLogin} 
                    Icon={fab.faGoogle}/>
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
    loginTitle:{
        fontSize: 27,
        color: colors.black,
    },
    userIcon:{
        margin:25,
        color:colors.lightGrey,
    },
    profileImage:{
        height: screenWidth/3,
        width: screenWidth/3,
        borderRadius: screenWidth/3,
        margin:25,
    },
    loginLabel:{
        textAlign: 'center',
        fontSize: 16,
        maxWidth: screenWidth/2,
    },
    footer:{
        flex:1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }

})

export default WithUser(LoginPage)
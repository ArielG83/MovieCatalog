import { GoogleSignin } from '@react-native-community/google-signin'

export const googleAPILogin = async ()=>{
    try{
        await GoogleSignin.hasPlayServices();
        const user = await GoogleSignin.signIn();
        return user
    } catch (error) {
        console.log(error)
    }
}
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken} from 'react-native-fbsdk';

export const facebookAPILogin = async () => {
    try {
        const result = await LoginManager.logInWithPermissions(["public_profile"])
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
            return new Promise(async (resolve, reject) => {
                const user = await AccessToken.getCurrentAccessToken()
                const responseInfoCallback = (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result)                      
                    }
                }
                const infoRequest = new GraphRequest('/me', {
                    accessToken: user.accessToken,
                    parameters: {
                        fields: {
                            string: 'id ,name, picture.type(large)'
                        }
                    }
                }, responseInfoCallback);
    
                new GraphRequestManager().addRequest(infoRequest).start()
            });
        }
      } catch (error) {
        console.log(error)
      }
}
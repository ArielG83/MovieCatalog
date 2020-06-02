import { USER } from '../consts'
import { facebookAPILogin } from '../../API/faceBook'
import { googleAPILogin } from '../../API/google'

const FBLogin = () => async dispatch => {
  try {
    const user = await facebookAPILogin()

    dispatch({
      type: USER.FB_LOGIN,
      payload: user,
    })
  } catch (error) {
    console.log(error)
  }
}

const GoogleLogin = () => async dispatch => {
  try {
    const {user} = await googleAPILogin()
    dispatch({
      type: USER.GOOGLE_LOGIN,
      payload: user,
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  FBLogin,
  GoogleLogin,
}
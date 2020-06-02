import { USER } from '../consts'

const initialState = {
  id: '',
  name: '',
  profileImage: '',
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER.FB_LOGIN:
        return {
          ...state,
          id: payload.id,
          name: payload.name,
          profileImage: payload.picture.data.url,
        }
    case USER.GOOGLE_LOGIN:
        return {
          ...state,
          id: payload.id,
          name: payload.name,
          profileImage: payload.photo,
        }
    default:
      return state
  }
}

export default userReducer
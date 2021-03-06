const initialState = {}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        [action.key]: action.user
      }
    case 'REPLACE_USERS':
      return action.users
    default:
      return state
  }
}

export const getUsers = (state) => state.users
export const getUser = (state, id) => state.users[id] || {}

export default usersReducer

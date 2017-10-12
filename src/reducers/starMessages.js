import { omit } from 'lodash'

const initialState = {

}

const starMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STAR_MESSAGE':
      return {...state, [action.messageId]: true}
    case 'UNSTAR_MESSAGE':
      return omit(state, action.messageId)
    default:
      return state
  }
}

export const isStarred = (state, messageId) =>{
  return state.starMessages[messageId] === true
}

export default starMessagesReducer

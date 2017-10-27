import { omit } from 'lodash'
import { listToObject } from '../helpers/data'

const initialState = {

}

const starMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STAR_MESSAGE':
      return {...state, [action.messageId]: true}
    case 'UNSTAR_MESSAGE':
      return omit(state, action.messageId)
    case 'REPLACE_STAR_MESSAGES':
      return listToObject(action.starredMessages, 'message_id')
    default:
      return state
  }
}

export const isStarred = (state, messageId) => {
  return !!state.starMessages[messageId]
}

export default starMessagesReducer

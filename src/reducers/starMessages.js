import { omit, isEmpty } from 'lodash'
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
      if (isEmpty(action.starredMessages)) {
        return action.starredMessages
      } else {
        return listToObject(action.starredMessages, 'message_id')
      }
    default:
      return state
  }
}

export const getIsStarred = (state, messageId) => {
  return !!state.starMessages[messageId]
}

export default starMessagesReducer

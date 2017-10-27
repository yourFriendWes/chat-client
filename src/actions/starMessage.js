import { getRoomsChannel } from '../reducers/rooms'

export const starMessage = (messageId) => ({
  type: 'STAR_MESSAGE',
  messageId: messageId
})

export const unstarMessage = (messageId) => ({
  type: 'UNSTAR_MESSAGE',
  messageId: messageId
})

export const replaceStarMessages = (data) => ({
  type: 'REPLACE_STAR_MESSAGES',
  starredMessages: data
})

export const submitStar = (messageId) => (dispatch, getState) => {
  const rooms = getRoomsChannel(getState())
  return rooms.push('starred_message:create', messageId)
}

export const deleteStar = (messageId) => (dispatch, getState) => {
  const rooms = getRoomsChannel(getState())
  return rooms.push('starred_message:delete', messageId)
}

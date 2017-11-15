import { getChannel } from './channels'

export const getRoomsChannel = (state) => getChannel(state, 'rooms')
export const getRoomChannel = (state, key) => getChannel(state, 'room:' + key)

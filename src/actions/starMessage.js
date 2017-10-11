export const starMessage = (messageId) => ({
  type: 'STAR_MESSAGE',
  messageId: messageId
})

export const unstarMessage = (messageId) => ({
  type: 'UNSTAR_MESSAGE',
  messageId: messageId
})

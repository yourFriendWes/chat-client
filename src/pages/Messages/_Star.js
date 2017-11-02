import React from 'react'
import { connect } from 'react-redux'
import { deleteStar, starMessage, submitStar, unstarMessage } from '../../actions/starMessage'
import Tooltip from '../../components/Tooltip'
import { Button } from 'antd'

const Star = ({currentUser, isStarred, toggleStar}) => {
  const handleStarClick = (event) => {
    if (event) { event.preventDefault() }
    toggleStar()
  }
  return (

    <Tooltip placement='top' title='Star this message'>
      <Button
        icon={isStarred ? 'star' : 'star-o'}
        style={isStarred ? {color: '#ffd700'} : {color: '#000000'}}
        onClick={handleStarClick}
        />
    </Tooltip>

  )
}

Star.displayName = 'Star'

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch, {isStarred, messageId}) => ({
  toggleStar: () => {
    const unstar = () => {
      const onSuccess = () => dispatch(unstarMessage(messageId))

      return dispatch(deleteStar(messageId, onSuccess))
    }
    const star = () => {
      const onSuccess = () => dispatch(starMessage(messageId))

      return dispatch(submitStar(messageId, onSuccess))
    }

    return isStarred ? unstar() : star()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Star)

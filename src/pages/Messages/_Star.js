import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../components/Tooltip'
import { Button } from 'antd'
import {deleteStar, unstarMessage, starMessage, submitStar} from '../../actions/starMessage'

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

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch, {isStarred, messageId}) => ({
  toggleStar: () => {
    const star = () => {
      const onSuccess = () => dispatch(starMessage(messageId))

      return dispatch(submitStar(messageId, onSuccess))
    }
    const unstar = () => {
      const onSuccess = () => dispatch(unstarMessage(messageId))

      return dispatch(deleteStar(messageId, onSuccess))
    }

    return isStarred ? unstar() : star()
  }
})

Star.displayName = 'Star'

export default connect(mapStateToProps, mapDispatchToProps)(Star)

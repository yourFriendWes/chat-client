import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../components/Tooltip'
import { Icon } from 'antd'
import {deleteStar, unstarMessage, starMessage, submitStar} from "../../actions/starMessage"

const Star = ({currentUser, isStarred, toggleStar}) => {
  const handleStarClick = (event) => {
    if(event){ event.preventDefault() }
    toggleStar()
  }
  return (
    <Tooltip placement='top' title="Star this message">
      <Icon type={isStarred ? 'star' : 'star-o'} onClick={handleStarClick} />
    </Tooltip>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch, {isStarred, messageId}) => ({
  toggleStar: () => (
      isStarred ? dispatch(unstarMessage(messageId)) & dispatch(deleteStar(messageId)) : dispatch(starMessage(messageId)) & dispatch(submitStar(messageId))
  )
})


Star.displayName = 'Star'


export default connect(mapStateToProps, mapDispatchToProps)(Star)

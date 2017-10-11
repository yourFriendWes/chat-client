import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../components/Tooltip'
import { Icon } from 'antd'
import {starMessage, unstarMessage} from "../../actions/starMessage"

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
  toggleStar: ()=> {
    console.log(isStarred, Date.now())
    isStarred ? dispatch(unstarMessage(messageId)) : dispatch(starMessage(messageId))
  }
})
Star.displayName = 'Star'


export default connect(mapStateToProps, mapDispatchToProps)(Star)

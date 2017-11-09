import React from 'react'
import { connect } from 'react-redux'
import history from '../../app/history'
import { leaveRoomChannel } from '../../actions/rooms'
import { deleteSubscription } from '../../actions/userSubscriptions'
import notification from '../../helpers/notification'
import { rootPath } from '../../helpers/paths'
import { Menu, Dropdown, Button, Modal } from 'antd'

const RoomHeaderActions = ({ handleLeave, handleArchive, isSubscribed, isDirectMessage, room }) => {
  if (!isSubscribed || isDirectMessage) {
    return null
  }

  const onArchiveConfirm = (event) => {
    if (event) { event.preventDefault() }
    console.log(room)

    Modal.confirm({
      cancelText: 'Cancel',
      content: "This will disable all users from posting new messages and prevent new users from joining "+ room,
      okText: 'Archive',
      onCancel: () => false,
      onOk: () => {
        handleArchive()
        return false
      },
      title: 'Do you want to archive room: ' + room + '?'
    })
  }

  const roomSettings = (
    <Menu>
      <Menu.Item>
        { isSubscribed && !isDirectMessage &&
          <button onClick={handleLeave}>Leave Room</button>
        }
      </Menu.Item>
      <Menu.Item>
        { isSubscribed && !isDirectMessage &&
        <button onClick={onArchiveConfirm}>Archive Room</button>
        }
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='chat-room-header-actions'>
      <Dropdown overlay={roomSettings} placement='bottomRight'>
        <Button className='anchor' icon='setting' />
      </Dropdown>
    </div>
  )
}

RoomHeaderActions.displayName = 'RoomHeaderActions'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch, { room: slug }) => ({
  handleLeave: () => {
    const onSuccess = () => {
      dispatch(leaveRoomChannel(slug))
      notification('Left room ' + slug, 'success')
      history.push(rootPath)
    }

    const onError = () => {
      notification('Error leaving room ' + slug, 'error')
    }

    return dispatch(deleteSubscription(slug, onSuccess, onError))
  },

  handleArchive: () => {
    console.log("Clicked Archive")
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomHeaderActions)

import React from 'react'
import { connect } from 'react-redux'
import MessageActions from './_MessageActions'
import Star from './_Star'
import moment from 'moment'
import Markdown from '../../components/Markdown'
import Tooltip from '../../components/Tooltip'
import { isStarred } from '../../reducers/starMessages'
import { Avatar, Icon } from 'antd'

const Message = ({ currentUser, editing, isStarredMessage, message, onDelete, renderHeading, room }) => {
  const { body, insertedAt, user } = message
  console.log(isStarredMessage, Date.now())

  return (
    <div className='message'>
      <div className='message-gutter'>
        { renderHeading &&
          <Avatar shape='square' icon='bulb' style={{ backgroundColor: '#52b3f9' }} />
        }
        { !renderHeading &&
          <div>
            <div className='hover-timestamp'>
              <Tooltip placement='top' title={moment(insertedAt).calendar()}>
                { moment(insertedAt).format('h:mm') }
              </Tooltip>
            </div>
            { editing && <Icon type='edit' /> }
          </div>
        }
      </div>
      <div className='message-content'>
        { renderHeading &&
          <div className='message-heading'>
            <strong>{user.name}</strong>
            {' '}
            <Tooltip placement='top' title={moment(insertedAt).calendar()}>
              { moment(insertedAt).format('h:mm A') }
            </Tooltip>
            <Star
              currentUser={currentUser}
              messageId={message.id}
              isStarred={isStarredMessage}
            />
            { editing && <Icon type='edit' /> }
          </div>
        }
        <Markdown value={body} />
        <MessageActions
          currentUser={currentUser}
          message={message}
          room={room}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state, {message})=> ({
  isStarredMessage: isStarred(state, message.id)
})

Message.displayName = 'Message'

export default connect(mapStateToProps)(Message)

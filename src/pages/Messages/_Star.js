import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../components/Tooltip'
import { Icon } from 'antd'

const Actions = () => {
  return (
    <Tooltip placement='top' title="Star this message">
      <Icon type="star-o" />
    </Tooltip>
  )
}

Actions.displayName = 'Star'

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Actions)

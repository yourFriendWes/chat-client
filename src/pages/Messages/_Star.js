import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../components/Tooltip'
import { Icon } from 'antd'

const Actions = () => {
  constructor(props) {
    super(props);
    this.state = {isStarred: false};
    this.onStarClick = this.onStarClick.bind(this);
  }
  onStarClick = () {
    this.setState(prevState => ({
      isStarred: !prevState.isStarred
    }));
  }
  return (
    <Tooltip placement='top' title="Star this message">
      <Icon type={this.state.isStarred ? 'star-o' : 'star'} onClick={this.onStarClick}/>
    </Tooltip>
  )
}

Actions.displayName = 'Star'

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Actions)

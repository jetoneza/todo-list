import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Divider,
  Tooltip,
  Icon,
} from '@material-ui/core';

import './Task.css';

class Task extends React.Component {
  textInput = React.createRef();

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleItemClick = () => {
    this.props.onClick(this.props.item.id);
    this.textInput.current.focus();
  }

  handleCompleteClick = () => {
    this.props.onCompleteClick(this.props.item.id);
  }

  handleTextChange = (e) => {
    this.props.onTextChange(this.props.item.id, e.target.value);
  }

  renderItemContent = (isActive) => {
    const { item } = this.props;

    return  (
      <input
        ref={this.textInput}
        type="text"
        onChange={this.handleTextChange}
        value={item.task} />
    );
  }

  render() {
    const { item, activeTask } = this.props;
    const isActive = activeTask === item.id;

    return (
      <React.Fragment key={item.id}>
        <ListItem className={`Item ${isActive ? 'active' : ''}`} onClick={this.handleItemClick}>
          <Tooltip title="Mark Complete">
            <Icon color="primary" onClick={this.handleCompleteClick}>
              <div className="CompleteIcon"/>
            </Icon>
          </Tooltip>
          <ListItemText>
            { this.renderItemContent(isActive) }
          </ListItemText>
          <Icon className="EditIcon">edit</Icon>
        </ListItem>
        <Divider inset component="li" />
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  item: PropTypes.object.isRequired,
  activeTask: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onCompleteClick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default Task;

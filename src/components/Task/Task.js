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
  handleItemClick = () => {
    this.props.onClick(this.props.item.id);
  }

  render() {
    const { item, activeTask } = this.props;
    const isActive = activeTask === item.id;

    return (
      <React.Fragment key={item.id}>
        <ListItem className={`Item ${isActive ? 'active' : ''}`}>
          <Tooltip title="Mark Complete">
            <Icon color="primary">
              <div className="CompleteIcon"/>
            </Icon>
          </Tooltip>
          <ListItemText inset onClick={this.handleItemClick}>{item.task}</ListItemText>
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
};

export default Task;

import React from 'react';
import {
  ListItem,
  ListItemText,
  Divider,
  Tooltip,
  Icon,
} from '@material-ui/core';

import './Task.css';

class Task extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <React.Fragment key={item.id}>
        <ListItem className="Item">
          <Tooltip title="Mark Complete">
            <Icon color="primary">
              <div className="CompleteIcon"/>
            </Icon>
          </Tooltip>
          <ListItemText inset>{item.task}</ListItemText>
          <Icon className="EditIcon">edit</Icon>
        </ListItem>
        <Divider inset component="li" />
      </React.Fragment>
    );
  }
}

export default Task;
